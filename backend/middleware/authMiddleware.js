const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


//Protect routes - Authentication middleware
const protect = async (req, res, next) => {
  try {
    // 1) Get token from header
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res
        .status(401)
        .json({
          message: "You are not logged in. Please log in to get access.",
        });
    }

    // 2) Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3) Check if user still exists
    const user = await User.findById(decoded.id);
    if (!user) {
      return res
        .status(401)
        .json({
          message: "The user belonging to this token no longer exists.",
        });
    }

    // 4) Grant access to protected route
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    if (error.name === "JsonWebTokenError") {
      return res
        .status(401)
        .json({ message: "Invalid token. Please log in again." });
    }
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Your token has expired. Please log in again." });
    }
    res.status(500).json({ message: "Server error in authentication" });
  }
};

//Authorization middleware - restrict to certain roles
const restrictedTo = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "You do not have permission to perform this action"
            });
        }
        next();
    };
};


module.exports = {
    protect,
    restrictedTo
}
