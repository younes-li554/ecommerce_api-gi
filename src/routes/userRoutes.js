const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');
const { registerValidation, loginValidation } = require('../validators/userValidator');
const { validateRequest } = require('../middlewares/errorMiddleware');

router.post('/register', registerValidation, validateRequest, userController.register);
router.post('/login', loginValidation, validateRequest, userController.login);
router.get('/', authMiddleware, adminMiddleware, userController.getUsers);

module.exports = router;