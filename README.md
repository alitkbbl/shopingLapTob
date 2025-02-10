Laptop Shopping Project
Welcome to the Laptop Shopping Project! This is a full-stack web application designed for purchasing laptops. The front-end is built with Next.jsand React, and the back-end uses Express and Node.js.The application includes an admin panel for managing products and a user interface for customers to browse and purchase laptops.

Table of Contents
About the Project

Tech Stack

Features

Getting Started

Prerequisites

Installation

Running the App

Environment Variables

Folder Structure


Contact

About the Project
This project is a full-stack laptop shopping site developed using Next.jsand React for the front-end and Express and Node.jsfor the back-end. The site features an admin panel where administrators can add and edit laptops, and regular users can log in and add laptops to their shopping carts.

Tech Stack
Front-end: Next.js, React

Back-end: Express, Node.js

Features
Admin Panel: Allows administrators to add, edit, and delete laptops.

User Authentication: Users can log in, register, and manage their profiles.

Shopping Cart: Users can add laptops to their shopping cart and proceed to checkout.

Responsive Design: The application is fully responsive and works on all devices.

Getting Started
Prerequisites
Before you begin, ensure you have the following installed:

Node.js(version 14 or higher)

NPM

Git

Installation
Clone the Repository

First, clone the repository:

sh
git clone https://github.com/username/laptop-shopping.git
cd laptop-shopping
Install Dependencies

Navigate to the respective directories and install the dependencies.

Front-end
sh
cd frontend
npm install
Back-end
sh
cd backend
npm install
Running the App
To start both the front-end and back-end servers using NPM:

Front-end
sh
cd frontend
npm run dev
Back-end
In a separate terminal window:

sh
cd backend
npm run dev
The front-end server will be running on http://localhost:3000 and the back-end server on http://localhost:5000.

Environment Variables
Create .env files in the frontend and backend directories and set the necessary environment variables.

Example .env file for Back-end
plaintext
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
JWT_SECRET=yourjwtsecret
Folder Structure
frontend: Contains the front-end code (Next.js and React).

backend: Contains the back-end code (Express and Node.js).
