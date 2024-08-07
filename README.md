# Job Portal Backend

## Description

This is the backend server for a job portal application built with Node.js, Express, MongoDB, and JWT authentication. It provides APIs for user authentication, job management (CRUD operations), and integrates with the frontend client via Axios.

## Features

- User authentication using JWT (JSON Web Tokens)
- RESTful APIs for managing job postings
  - Create, Read, Update, and Delete (CRUD) operations for jobs
- Secure password hashing using bcrypt
- MongoDB integration for data storage
- Error handling and validation
- Middleware for authentication and authorization

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- Express Validator for input validation

## Setup

### Prerequisites

- Node.js (version >= 12)
- MongoDB installed and running locally or a MongoDB Atlas account (for cloud-based MongoDB)
- npm or yarn package manager

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/shourovys/techforing-task-1-backend
   cd techforing-task-1-backend
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Configure environment variables

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   Replace `your_mongodb_connection_string` with your MongoDB connection URI and `your_jwt_secret_key` with a secure secret for JWT token signing.

4. Start the server

   ```bash
   npm dev
   ```

   The server will start running at `http://localhost:5000` by default.
