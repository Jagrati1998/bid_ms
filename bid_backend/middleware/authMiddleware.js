const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', ''); // Get token from headers
        if (!token) {
            return res.status(401).json({ message: 'Access denied, no token provided.' });
        }

        // Verify the token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(verified.id); // Get the user from the database
        if (!req.user) {
            return res.status(401).json({ message: 'Access denied, invalid token.' });
        }

        next(); // Proceed to the next middleware/controller
    } catch (error) {
        res.status(401).json({ message: 'Access denied, invalid token.' });
    }
};

module.exports = authMiddleware;
