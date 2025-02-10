Laptop Shop - Full Stack Web Application

Laptop Shop is a full-stack e-commerce web application for purchasing laptops. This application allows users to browse and purchase laptops, manage their shopping cart, and perform secure logins. Admin users can manage laptop inventory, including adding, editing, and removing laptops.
Table of Contents

    Features
    Technologies
    Installation
    Usage
    API Endpoints
    Screenshots
    License

Features

    User Registration & Login: Users can create accounts, log in, and securely manage their sessions.
    Shopping Cart: Users can browse available laptops, add items to their cart, and proceed to checkout.
    Admin Panel: Admin users can manage laptops (add, edit, delete).
    Responsive Design: Mobile-friendly design for a seamless experience on all devices.
    Authentication: Secure user authentication and authorization.

Technologies

    Frontend:
        React.js
        Next.js
    Backend:
        Node.js
        Express.js
    Database:
        (Include the database you're using, e.g., MongoDB, MySQL)
    Other Tools:
        (e.g., JWT for authentication, bcrypt for password hashing)

Installation

To run this project locally, follow these steps:

    Clone the repository:

git clone https://github.com/your-username/laptop-shop.git

Install dependencies: Navigate to the project’s root folder and run the following commands:

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

Set up environment variables: Create a .env file in the root of the backend and frontend directories. Include the following variables:

Backend .env file:

PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret

Frontend .env file:

NEXT_PUBLIC_API_URL=your_backend_url

Run the application:

    Backend:

cd backend
npm run dev

Frontend:

        cd frontend
        npm run dev

    The application should now be running on http://localhost:3000.

Usage

Once the project is running:

    Access the Frontend at http://localhost:3000

    Access the Admin Panel (e.g., at http://localhost:3000/admin after login)

    Admin actions:
        Add new laptops
        Edit or delete existing laptops
        Manage inventory

    User actions:
        Browse laptops
        Add laptops to the shopping cart
        Proceed with the purchase

API Endpoints

Here are some important API routes used in the project:

    User Authentication:
        POST /api/auth/register - Register a new user
        POST /api/auth/login - User login

    Admin:
        POST /api/laptops - Add a new laptop (Admin only)
        PUT /api/laptops/:id - Edit laptop details (Admin only)
        DELETE /api/laptops/:id - Delete a laptop (Admin only)

    User:
        GET /api/laptops - Get a list of laptops
        POST /api/cart - Add a laptop to the cart
        GET /api/cart - View shopping cart
