# 🔐 Auth API

A simple and secure Authentication API built with **Node.js**, **Express.js**, and **MongoDB**. It provides user authentication features such as registration, login, password hashing, and JWT-based authorization.

## 🚀 Features

* User Registration
* User Login
* Password Hashing with bcrypt
* JWT Authentication
* Protected Routes
* Input Validation
* Error Handling
* RESTful API Structure

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcrypt
* dotenv

## 📂 Project Structure

```text
auth-api/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── .env
│── server.js
│── package.json
```

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project folder:

```bash
cd auth-api
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the development server:

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

## 📌 API Endpoints

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

### Get Profile (Protected)

```http
GET /api/auth/profile
```

## 🔒 Authentication

Protected routes require a JWT token in the request header.

```http
Authorization: Bearer <your_jwt_token>
```

## 📬 Sample Response

```json
{
  "success": true,
  "message": "Login successful",
  "token": "your_jwt_token"
}
```

## 📖 Future Improvements

* Refresh Tokens
* Forgot Password
* Reset Password
* Email Verification
* Role-Based Authorization
* Rate Limiting

## 👨‍💻 Author

**Abhishek Panwar**

If you found this project helpful, consider giving it a ⭐ on GitHub.
