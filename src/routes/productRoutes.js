const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');
const { productValidation } = require('../validators/productValidator');
const { validateRequest } = require('../middlewares/errorMiddleware');

router.post('/', authMiddleware, adminMiddleware, productValidation, validateRequest, productController.createProduct);
router.get('/', productController.getProducts);

module.exports = router;