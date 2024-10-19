const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authService = {
    register: async (firstName,lastName, email, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstName,lastName, email, password: hashedPassword });
        return await newUser.save();
    },

    login: async (email, password) => {
        const user = await User.findOne({ email });
        if (!user) throw new Error('Invalid credentials');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid credentials');

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { token, user };
    }
};

module.exports = authService;
