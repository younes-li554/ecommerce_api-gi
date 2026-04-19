const Product = require('../models/Product');

const createProduct = async (data) => {
    const product = new Product(data);
    return await product.save();
};

const getProducts = async () => Product.find();

const updateProduct = async (id, data) => Product.findByIdAndUpdate(id, data, { new: true });

const deleteProduct = async (id) => Product.findByIdAndDelete(id);

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };