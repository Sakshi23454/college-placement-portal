# MGM University - College Job Portal

A comprehensive job portal platform connecting students with companies for campus placements and recruitment.

## Features

- **Admin Portal**: Manage colleges, companies, students, and job postings
- **College Portal**: Manage student registrations and campus recruitment
- **Company Portal**: Post jobs and manage applications
- **Student Portal**: Browse jobs and apply for positions

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Next.js API Routes
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Seed the database (optional):
   ```bash
   npm run seed
   ```
