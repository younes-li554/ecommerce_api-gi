const User = require('../models/User');
const jwt = require('jsonwebtoken');

const registerUser = async (data) => {
    const { name, email, password, role = 'user' } = data;
    const user = new User({ name, email, password, role });
    await user.save();
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return { user, token };
};

const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid email or password');
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error('Invalid email or password');
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return { user, token };
};

const getUsers = async () => User.find();

module.exports = { registerUser, loginUser, getUsers };