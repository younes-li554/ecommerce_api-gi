const Order = require('../models/Order');
const Product = require('../models/Product');

const createOrder = async (userId, products) => {
    let totalPrice = 0;
    for (const item of products) {
        const product = await Product.findById(item.product);
        if(!product) throw new Error(`Product ${item.product} not found`);
        if(product.stock < item.quantity) throw new Error(`Not enough stock for ${product.name}`);
        totalPrice += product.price * item.quantity;
        product.stock -= item.quantity;
        await product.save();
    }
    const order = new Order({ user: userId, products, totalPrice });
    return await order.save();
};

const getOrders = async () => Order.find().populate('user').populate('products.product');

module.exports = { createOrder, getOrders };