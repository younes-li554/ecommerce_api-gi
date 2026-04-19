const { body } = require('express-validator');

const productValidation = [
  body('name').notEmpty().withMessage('Product name is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('stock').isInt({ min: 0 }).withMessage('Stock must be 0 or greater')
];

module.exports = { productValidation };