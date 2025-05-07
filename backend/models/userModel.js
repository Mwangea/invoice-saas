const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
    //create new user
    async  create(userData) {
        try{
            //Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword =  await bcrypt.hash(userData.password, salt);

            const [result] = await db.execute(
                'INSERT INTO users (first_name, last_name, email, password, role) VALUES (?,?,?,?,?)',
                [userData.firstName, userData.lastName, userData.email, hashedPassword, userData.role || 'user']
            );

            return result.insertId;
        } catch(error){
            throw error;
        }
    },

    //find user by email
    async findByEmail(email){
        try{
            const[rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
            return rows[0];

        } catch (error) {
            throw error;
        }
    },

    //find user by id
    async findById(id) {
        try {
            const [rows] = await db.execute('SELECT id, first_name, last_name, email, role FROM users WHERE id = ?', [id]);
            return rows[0];

        } catch (error){
            throw error;
        }
    },

    // verify password
    async verifyPassword(plainPassword, hashedPassword){
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
};

module.exports = User;