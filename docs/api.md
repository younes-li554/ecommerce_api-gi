# API Documentation

## Users
- **POST /api/users/register**: Register a new user
- **POST /api/users/login**: Login and get JWT token
- **GET /api/users**: Admin only, list all users

## Products
- **POST /api/products**: Admin only, create a new product
- **GET /api/products**: List all products

## Orders
- **POST /api/orders**: Create a new order
- **GET /api/orders**: Admin only, list all orders

---

### Notes
- All POST requests require JSON content-type
- Authentication required for protected routes
- Validation errors returned as JSON