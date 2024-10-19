const authService = require('../services/authService');

const authController = {
    register: async (req, res) => {
        try {
            const { firstName, lastName,email, password } = req.body;
            const user = await authService.register(firstName, lastName,email, password);
            res.status(201).json({ message: 'User registered successfully', user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const { token, user } = await authService.login(email, password);
            res.json({ token, user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = authController;
