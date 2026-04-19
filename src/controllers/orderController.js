const orderService = require('../services/orderService');

const createOrder = async (req, res) => {
    try { const order = await orderService.createOrder(req.user.id, req.body.products); res.status(201).json(order); }
    catch (err) { res.status(400).json({ message: err.message }); }
};

const getOrders = async (req, res) => {
    try { const orders = await orderService.getOrders(); res.json(orders); }
    catch (err) { res.status(500).json({ message: err.message }); }
};

module.exports = { createOrder, getOrders };