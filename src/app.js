const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

// إنشاء التطبيق
const app = express();

// ============================
// Middlewares أساسية
// ============================

// Helmet لحماية الهيدر
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 دقيقة
    max: 100, // الحد الأقصى للطلبات لكل IP
    message: 'Too many requests, please try again later.'
});
app.use(limiter);

// Parsing JSON و CORS
app.use(express.json());
app.use(cors());

// ============================
// Import Routes
// ============================
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;