const { body } = require('express-validator');

const orderValidation = [
  body('products').isArray({ min: 1 }).withMessage('Products array is required'),
  body('products.*.product').notEmpty().withMessage('Product ID is required'),
  body('products.*.quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1')
];

module.exports = { orderValidation };