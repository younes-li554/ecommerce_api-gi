const userService = require('../services/userService');

const register = async (req, res) => {
    try {
        const { name, email, password, role = 'user' } = req.body;
        const result = await userService.registerUser({ name, email, password, role });
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const login = async (req, res) => {
    try {
        const result = await userService.loginUser(req.body.email, req.body.password);
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { register, login, getUsers };