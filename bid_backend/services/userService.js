const User = require('../models/User');

const userService = {
    getUserById: async (userId) => {
        return await User.findById(userId);
    },

    updateUser: async (userId, updateData) => {
        return await User.findByIdAndUpdate(userId, updateData, { new: true });
    }
};

module.exports = userService;
