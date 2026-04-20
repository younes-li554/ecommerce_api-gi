# 🛒 E-commerce Backend API

A scalable and secure RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB.
This project follows a clean architecture approach with separation of concerns (Controllers, Services, Models).

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* bcrypt (password hashing)
* express-validator
* Helmet & Rate Limiting
* Winston Logger

---

## 📁 Project Structure

```
src/
 ├── config/
 ├── models/
 ├── controllers/
 ├── services/
 ├── routes/
 ├── middlewares/
 └── utils/
```

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/USERNAME/REPO_NAME.git
cd REPO_NAME
npm install
```

### 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

---

## ▶️ Running the Server

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 🔑 Features

### 🔐 Authentication & Authorization

* JWT-based authentication (Register / Login)
* Role-Based Access Control (Admin / User)
* Protected routes using middleware

### 📦 Product Management

* Create, update, delete products (Admin only)
* Get all products / single product
* Stock control logic

### 🧾 Order System

* Create orders
* Order flow management
* Pricing calculations

### 🛡️ Security

* Password hashing using bcrypt
* Helmet for secure HTTP headers
* Rate limiting to prevent abuse

### ✅ Validation & Error Handling

* Request validation using express-validator
* Centralized error handling system

### 📊 Logging

* Request & error logging using Winston

---

## 🔄 API Flow

```
Request → Route → Controller → Service → Database
```

---

## 📚 API Documentation

Detailed API documentation is available here:

```
docs/api.md
```

---

## 🧪 Testing

* Tested using Postman
* Covers authentication, products, and orders endpoints

---

## 🌍 Deployment (Optional)

You can deploy this API using:

* Render
* Railway

---

## 📌 Future Improvements

* Unit & Integration Testing (Jest)
* Swagger API Documentation
* Payment Integration
* Docker support

---

## 👨‍💻 Author

Developed as a full-featured backend project for learning and production-ready practices.
