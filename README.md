# Project Setup Guide

This guide will walk you through setting up the project and its required database locally on your machine.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
```bash
- **Node.js** 
- **npm** 
- **PostgreSQL**
```
## Getting Started

### 1. Clone the Repository

Start by cloning the repository to your local machine. Run the following command in your terminal:

```bash
git clone https://github.com/uttamsah724/food_delivery_backend.git
cd food_delivery_backend
```
### 2. **Install Dependencies**

Navigate to the project directory (if you haven't already) and install the required npm packages:

```bash
npm install
```
### 3. Setup the Database

#### Create the Database

First, ensure your PostgreSQL service is running. Then, create a new PostgreSQL database:

```bash
createdb your_database_name
```

Initialize the Database Schema
Execute the SQL scripts included in the project to set up the database schema. This step varies depending on how your project is structured, but here's a general command:

```bash
psql -U username -d your_database_name -a -f path/to/your/schema.sql
```
Replace username with your PostgreSQL username, your_database_name with the name of your database, and path/to/your/schema.sql with the path to your SQL schema file.

### 4. Configure the Application

#### Set Environment Variables

Create a `.env` file in the root of your project directory. Add the necessary environment variables for your application. 

### 5. Start the Application

With the database set up and the application configured, you can now start the application:

```bash
npm start
```
Check the output to ensure the application starts without errors. By default, your application should be accessible at http://localhost:3000, unless you've configured a different port


