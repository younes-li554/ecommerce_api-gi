const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');
const { orderValidation } = require('../validators/orderValidator');
const { validateRequest } = require('../middlewares/errorMiddleware');

router.post('/', authMiddleware, orderValidation, validateRequest, orderController.createOrder);
router.get('/', authMiddleware, adminMiddleware, orderController.getOrders);

module.exports = router;