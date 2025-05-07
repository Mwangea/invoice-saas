const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const expressValidator = require('express-validator')
const validationResult = expressValidator.validationResult;

// Generate JWT token
const generateToken = (id,role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

const authController = {
    // register a new user
    async register(req, res) {
    // check for validation errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { firstName, lastName, email, password } = req.body;

        //check if user already exists
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'user with this email already exists'});
        }

        // create new user with default role 'user'
        const userId = await User.create({
            firstName,
            lastName,
            email,
            password,
            role: 'user'
        });

        // Get the newly created user (without password)
        const user = await User.findById(userId);

        //Generate JWT token
        const token = generateToken(userId, 'user');

        res.status(201).json({
            status:'success',
            token,
            data: { user }
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error during registration'});
    }
  },

  // Register a new admin (protected, only for initial setup or by super admin)
  async registerAdmin(req, res) {
    //check for validation errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { firstName, lastName, email, password, adminSecretKey } = req.body;

        // verify the admin secret key
        if (adminSecretKey !== process.env.ADMIN_SECRET_KEY) {
            return res.status(403).json ({ message: 'Invalid admin secret key'});
        }

        // check if user already exists
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'user with this email already exists'});
        }

        // create new admin user
        const userId = await User.create({
            firstName,
            lastName,
            email,
            password,
            role: 'admin'
        });

        // Get the newly created admin (without password)
        const user =  await User.findById(userId);

        // Generate JWT token
        const token = generateToken(userId, 'admin');

        res.status(201).json({
            status: 'success',
            token,
            data: { user }
        });
    } catch (error) {
        console.error('Admin registration error:', error);
        res.status(500).json({ message: 'Server error during admin registration'});
    }
  },

  // user login
  async login(req, res) {
    //check for validation errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;

        //check if user exists
        const user = await User.findByEmail(email);
        if(!user) {
            return res.status(401).json({ message: 'Invalid email'});
        }

        // verify password
        const isPasswordValid =  await User.verifyPassword(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({ message: 'Invalid password'})
        }

        // Generate JWT token
        const token = generateToken(user.id, user.role);

        //remove password from response
        const { password: _, ...userWithoutPassword } = user;

        res.status(200).json({
            status: 'success',
            token,
            data: { user: userWithoutPassword}
        });

    } catch(error){
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login'});
    }
  },


  // Get current user 
  async getCurrentUser(req, res) {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found'});
        }

        res.status(200).json ({
           status: 'Success',
           data: { user }
        });
    } catch (error){
        console.error('Get current user error:', error);
        res.status(500).json({ message: 'Server error'});
    }
  }
};

module.exports = authController;