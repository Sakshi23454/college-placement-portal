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

## Database Seed Information

The seed script (`npm run seed`) populates the database with sample data for testing and development.

### Password

All accounts use the same password for development:
- **Password**: `password123`

---

## Admin Account

**Email**: `admin@mgmu.ac.in`  
**Password**: `password123`  
**Role**: System Administrator

The admin has full access to:
- Approve/reject company registrations
- Manage all colleges
- View all students and applications
- Monitor system analytics

---

## College

### MGM University

**Email**: `mgm@mgmu.ac.in`  
**Password**: `password123`  
**Address**: N-6, CIDCO  
**City**: Nanded  
**State**: Maharashtra  
**Phone**: 9876543210  
**Established**: 1989

---

## Companies (All Approved)

### 1. Infosys
- **Email**: `hr@infosys.com`
- **Password**: `password123`
- **Website**: https://www.infosys.com
- **Industry**: Information Technology
- **Size**: 1000+
- **Location**: Bangalore, Karnataka
- **Description**: Global leader in next-generation digital services and consulting
- **Jobs Posted**: 2

### 2. Tech Mahindra
- **Email**: `careers@techmahindra.com`
- **Password**: `password123`
- **Website**: https://www.techmahindra.com
- **Industry**: Information Technology
- **Size**: 1000+
- **Location**: Pune, Maharashtra
- **Description**: Leading provider of digital transformation, consulting and business re-engineering services
- **Jobs Posted**: 2

### 3. Wipro
- **Email**: `recruitment@wipro.com`
- **Password**: `password123`
- **Website**: https://www.wipro.com
- **Industry**: Information Technology
- **Size**: 1000+
- **Location**: Bangalore, Karnataka
- **Description**: Leading global information technology, consulting and business process services company
- **Jobs Posted**: 2

### 4. TCS
- **Email**: `jobs@tcs.com`
- **Password**: `password123`
- **Website**: https://www.tcs.com
- **Industry**: Information Technology
- **Size**: 1000+
- **Location**: Mumbai, Maharashtra
- **Description**: Leading global IT services, consulting and business solutions organization
- **Jobs Posted**: 2

### 5. Accenture
- **Email**: `careers@accenture.com`
- **Password**: `password123`
- **Website**: https://www.accenture.com
- **Industry**: Information Technology
- **Size**: 1000+
- **Location**: Hyderabad, Telangana
- **Description**: Global professional services company with leading capabilities in digital, cloud and security
- **Jobs Posted**: 2

---

## Students (20 Total)

All students are from **MGM University** and use **@mgmu.ac.in** email domain.

### 1. Aarav Sharma
- **Email**: `aarav.sharma@mgmu.ac.in`
- **Password**: `password123`
- **Roll Number**: CS2021001
- **Stream**: Computer Science
- **CGPA**: 8.5
- **Graduation Year**: 2025
- **Skills**: JavaScript, React, Node.js, MongoDB

### 2. Ananya Patel
- **Email**: `ananya.patel@mgmu.ac.in`
- **Password**: `password123`
- **Roll Number**: CS2021002
- **Stream**: Computer Science
- **CGPA**: 9.0
- **Graduation Year**: 2025
- **Skills**: Python, Machine Learning, TensorFlow, Data Analysis

### 3. Arjun Kumar
- **Email**: `arjun.kumar@mgmu.ac.in`
- **Password**: `password123`
- **Roll Number**: IT2021001
- **Stream**: Information Technology
- **CGPA**: 7.8
- **Graduation Year**: 2025
- **Skills**: Java, Spring Boot, MySQL, Docker

### 4. Diya Singh
- **Email**: `diya.singh@mgmu.ac.in`
- **Password**: `password123`
- **Roll Number**: EC2021001
- **Stream**: Electronics
- **CGPA**: 8.2
- **Graduation Year**: 2025
- **Skills**: Embedded Systems, IoT, C++, Arduino

### 5. Ishaan Verma
- **Email**: `ishaan.verma@mgmu.ac.in`
- **Password**: `password123`
- **Roll Number**: CS2021003
- **Stream**: Computer Science
- **CGPA**: 8.8
- **Graduation Year**: 2025
- **Skills**: React, TypeScript, Next.js, Tailwind CSS

### 6. Kavya Gupta
- **Email**: `kavya.gupta@mgmu.ac.in`
- **Password**: `password123`
- **Roll Number**: IT2021002
- **Stream**: Information Technology
- **CGPA**: 8.0
- **Graduation Year**: 2025
- **Skills**: Java, Python, SQL, AWS

### 7. Rohan Reddy
- **Email**: `rohan.reddy@mgmu.ac.in`
- **Password**: `password123`
- **Roll Number**: CS2021004
- **Stream**: Computer Science
- **CGPA**: 7.5
- **Graduation Year**: 2025
- **Skills**: JavaScript, Vue.js, Firebase, MongoDB

### 8. Saanvi Nair
- **Email**: `saanvi.nair@mgmu.ac.in`
- **Password**: `password123`
- **Roll Number**: IT2021003
- **Stream**: Information Technology
- **CGPA**: 8.6
- **Graduation Year**: 2025
- **Skills**: Python, Django, PostgreSQL, Docker

### 9. Vihaan Joshi
- **Email**: `vihaan.joshi@mgmu.ac.in`
- **Password**: `password123`
- **Roll Number**: EC2021002
- **Stream**: Electronics
- **CGPA**: 7.9
- **Graduation Year**: 2025
- **Skills**: C, VLSI Design, Embedded C, Microcontrollers

### 10. Aisha Khan
- **Email**: `aisha.khan@mgmu.ac.in`
- **Password**: `password123`
- **Roll Number**: CS2021005
- **Stream**: Computer Science
- **CGPA**: 9.2
- **Graduation Year**: 2025
- **Skills**: Python, Machine Learning, Deep Learning, NLP

### 11-20. Additional Students
All 20 students listed in seed data with @mgmu.ac.in emails. See seed.ts for complete list.

---

## Job Postings (10 Total)

### Infosys Jobs

#### 1. Software Engineer
- **Location**: Bangalore
- **Type**: Full-time
- **Salary**: ₹4,00,000 - ₹6,00,000 per annum
- **Min CGPA**: 7.0
- **Allowed Streams**: Computer Science, Information Technology
- **Skills Required**: Java, Python, SQL, Problem Solving
- **Deadline**: December 31, 2025
- **Status**: Active

#### 2. System Engineer Trainee
- **Location**: Pune
- **Type**: Full-time
- **Salary**: ₹3,50,000 - ₹4,50,000 per annum
- **Min CGPA**: 6.5
- **Allowed Streams**: Computer Science, Information Technology, Electronics
- **Skills Required**: C, C++, Java, Communication
- **Deadline**: November 30, 2025
- **Status**: Active

### Tech Mahindra Jobs

#### 3. Associate Software Engineer
- **Location**: Pune
- **Type**: Full-time
- **Salary**: ₹3,80,000 - ₹5,00,000 per annum
- **Min CGPA**: 7.0
- **Allowed Streams**: Computer Science, Information Technology
- **Skills Required**: Java, JavaScript, React, Node.js
- **Deadline**: December 15, 2025
- **Status**: Active

#### 4. Network Engineer
- **Location**: Hyderabad
- **Type**: Full-time
- **Salary**: ₹4,00,000 - ₹5,50,000 per annum
- **Min CGPA**: 7.0
- **Allowed Streams**: Computer Science, Information Technology, Electronics
- **Skills Required**: Networking, TCP/IP, Routing, Switching
- **Deadline**: December 20, 2025
- **Status**: Active

### Wipro Jobs

#### 5. Project Engineer
- **Location**: Bangalore
- **Type**: Full-time
- **Salary**: ₹3,80,000 - ₹5,00,000 per annum
- **Min CGPA**: 6.5
- **Allowed Streams**: Computer Science, Information Technology
- **Skills Required**: Java, Python, SQL, Agile
- **Deadline**: December 31, 2025
- **Status**: Active

#### 6. Data Analyst
- **Location**: Chennai
- **Type**: Full-time
- **Salary**: ₹4,00,000 - ₹5,50,000 per annum
- **Min CGPA**: 7.0
- **Allowed Streams**: Computer Science, Information Technology
- **Skills Required**: SQL, Python, Excel, Tableau, Power BI
- **Deadline**: December 10, 2025
- **Status**: Active

### TCS Jobs

#### 7. Assistant Systems Engineer
- **Location**: Mumbai
- **Type**: Full-time
- **Salary**: ₹3,60,000 - ₹4,80,000 per annum
- **Min CGPA**: 6.0
- **Allowed Streams**: Computer Science, Information Technology, Electronics
- **Skills Required**: C, Java, Python, Problem Solving
- **Deadline**: December 31, 2025
- **Status**: Active

#### 8. Digital Software Engineer
- **Location**: Bangalore
- **Type**: Full-time
- **Salary**: ₹7,00,000 - ₹9,00,000 per annum
- **Min CGPA**: 8.0
- **Allowed Streams**: Computer Science, Information Technology
- **Skills Required**: JavaScript, React, Angular, Node.js, MongoDB
- **Deadline**: November 30, 2025
- **Status**: Active

### Accenture Jobs

#### 9. Application Development Associate
- **Location**: Hyderabad
- **Type**: Full-time
- **Salary**: ₹4,50,000 - ₹6,00,000 per annum
- **Min CGPA**: 7.0
- **Allowed Streams**: Computer Science, Information Technology
- **Skills Required**: Java, Python, SQL, Communication
- **Deadline**: December 20, 2025
- **Status**: Active

#### 10. Technology Consulting Analyst
- **Location**: Bangalore
- **Type**: Full-time
- **Salary**: ₹6,00,000 - ₹8,00,000 per annum
- **Min CGPA**: 7.5
- **Allowed Streams**: Computer Science, Information Technology
- **Skills Required**: Business Analysis, Technology Consulting, Communication, Problem Solving
- **Deadline**: December 15, 2025
- **Status**: Active

---

## Sample Applications

The seed data includes 12 sample applications with various statuses:
- **Applied**: 7 applications
- **Shortlisted**: 3 applications
- **Hired**: 1 application
- **Rejected**: 1 application

---

## Quick Test Login Credentials

### Admin
```
Email: admin@mgmu.ac.in
Password: password123
```

### College
```
Email: mgm@mgmu.ac.in
Password: password123
```

### Sample Company (Infosys)
```
Email: hr@infosys.com
Password: password123
```

### Sample Student (High Performer)
```
Email: aisha.khan@mgmu.ac.in
Password: password123
CGPA: 9.2
```

---

## Project Structure

```
mgm-zip/
├── app/                                    # Next.js 13+ App Directory
│   ├── about/page.tsx                      # About page
│   ├── admin/                              # Admin dashboard and management
│   │   ├── analytics/page.tsx              # Analytics dashboard
│   │   ├── approvals/page.tsx              # Company approval management
│   │   ├── colleges/                       # College management
│   │   │   ├── create/page.tsx             # Create new college
│   │   │   └── page.tsx                    # List all colleges
│   │   ├── companies/                      # Company management
│   │   │   ├── create/page.tsx             # Create new company
│   │   │   └── page.tsx                    # List all companies
│   │   ├── dashboard/page.tsx              # Admin dashboard home
│   │   ├── students/                       # Student management
│   │   │   ├── create/page.tsx             # Create new student
│   │   │   ├── edit/[id]/page.tsx          # Edit student by ID
│   │   │   └── page.tsx                    # List all students
│   │   └── layout.tsx                      # Admin layout wrapper
│   ├── api/                                # API Routes
│   │   ├── admin/                          # Admin API endpoints
│   │   │   ├── analytics/route.ts          # Analytics data API
│   │   │   ├── colleges/                   # College CRUD operations
│   │   │   │   ├── [id]/route.ts           # College by ID operations
│   │   │   │   └── route.ts
│   │   │   ├── companies/                  # Company CRUD operations
│   │   │   │   ├── [id]/approve/route.ts   # Approve/reject company
│   │   │   │   ├── [id]/route.ts           # Company by ID operations
│   │   │   │   └── route.ts
│   │   │   └── students/                   # Student CRUD operations
│   │   │       ├── [id]/route.ts           # Student by ID operations
│   │   │       └── route.ts
│   │   ├── auth/                           # Authentication endpoints
│   │   │   ├── [...nextauth]/route.ts      # NextAuth configuration
│   │   │   ├── forgot-password/route.ts    # Password reset request
│   │   │   ├── reset-password/route.ts     # Password reset
│   │   │   ├── signup/route.ts             # Company/College signup
│   │   │   ├── student-signup/route.ts     # Student signup
│   │   │   └── verify-email/route.ts       # Email verification
│   │   ├── college/                        # College API endpoints
│   │   │   ├── placements/route.ts         # Placement management
│   │   │   └── students/route.ts           # Student management by college
│   │   ├── colleges/route.ts               # Public college list
│   │   ├── company/                        # Company API endpoints
│   │   │   ├── applications/               # Application management
│   │   │   │   ├── [id]/status/route.ts    # Update application status
│   │   │   │   ├── [id]/route.ts           # Application by ID
│   │   │   │   └── route.ts
│   │   │   └── jobs/                       # Job posting management
│   │   │       ├── [id]/route.ts           # Job by ID operations
│   │   │       └── route.ts
│   │   ├── jobs/                           # Job listings
│   │   │   ├── public/route.ts             # Public job listings
│   │   │   └── route.ts
│   │   ├── student/                        # Student API endpoints
│   │   │   ├── applications/route.ts       # Student applications
│   │   │   ├── jobs/route.ts               # Job browsing
│   │   │   ├── profile/route.ts            # Profile management
│   │   │   └── resume/route.ts             # Resume upload/management
│   │   └── user/change-password/route.ts   # Change password
│   ├── auth/                               # Authentication pages
│   │   ├── forgot-password/page.tsx        # Forgot password page
│   │   ├── reset-password/page.tsx         # Reset password page
│   │   ├── signin/page.tsx                 # Sign in page
│   │   ├── signup/page.tsx                 # Company/College signup page
│   │   ├── student-signup/page.tsx         # Student signup page
│   │   └── verify-email/page.tsx           # Email verification page
│   ├── college/                            # College portal
│   │   ├── dashboard/page.tsx              # College dashboard
│   │   ├── placements/page.tsx             # Placement records
│   │   ├── students/                       # Student management
│   │   │   ├── create/page.tsx             # Add new student
│   │   │   └── page.tsx                    # List students
│   │   └── layout.tsx                      # College layout wrapper
│   ├── company/                            # Company portal
│   │   ├── applications/page.tsx           # View applications
│   │   ├── dashboard/page.tsx              # Company dashboard
│   │   ├── post-job/page.tsx               # Post new job
│   │   └── layout.tsx                      # Company layout wrapper
│   ├── contact/page.tsx                    # Contact page
│   ├── jobs/page.tsx                       # Public job listings page
│   ├── privacy/page.tsx                    # Privacy policy page
│   ├── student/                            # Student portal
│   │   ├── applications/page.tsx           # My applications
│   │   ├── dashboard/page.tsx              # Student dashboard
│   │   ├── jobs/                           # Browse jobs
│   │   │   ├── [id]/page.tsx               # Job details by ID
│   │   │   └── page.tsx                    # Job listing
│   │   ├── profile/                        # Student profile
│   │   │   ├── edit/page.tsx               # Edit profile
│   │   │   └── page.tsx                    # View profile
│   │   └── layout.tsx                      # Student layout wrapper
│   ├── terms/page.tsx                      # Terms of service page
│   ├── layout.tsx                          # Root layout
│   └── page.tsx                            # Home page
│
├── components/                             # React Components
│   ├── ui/                                 # Shadcn UI Components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── table.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   └── toaster.tsx
│   ├── dashboard-layout.tsx                # Dashboard layout component
│   ├── footer.tsx                          # Footer component
│   ├── navbar.tsx                          # Navigation bar component
│   └── theme-provider.tsx                  # Theme provider component
│
├── hooks/                                  # Custom React Hooks
│   └── use-toast.ts                        # Toast notification hook
│
├── lib/                                    # Utility Functions & Configurations
│   ├── auth.ts                             # Authentication utilities
│   ├── email.ts                            # Email service utilities
│   ├── file-upload.ts                      # File upload utilities
│   ├── middleware.ts                       # Middleware utilities
│   ├── mongodb.ts                          # MongoDB connection
│   ├── utils.ts                            # General utility functions
│   └── validations.ts                      # Form validation schemas
│
├── models/                                 # MongoDB Mongoose Models
│   ├── Admin.ts                            # Admin model
│   ├── Application.ts                      # Job application model
│   ├── College.ts                          # College model
│   ├── Company.ts                          # Company model
│   ├── EmailVerification.ts                # Email verification model
│   ├── Job.ts                              # Job posting model
│   ├── PasswordReset.ts                    # Password reset model
│   └── Student.ts                          # Student model
│
├── public/                                 # Static Assets
│   ├── uploads/resumes/                    # Student resumes
│   └── mgm-logo.svg                        # MGM University logo
│
├── scripts/                                # Utility Scripts
│   ├── seed.ts                             # Database seeding script (TypeScript)
│   └── seed.js                             # Database seeding script (JavaScript)
│
├── types/                                  # TypeScript Type Definitions
│   ├── global.d.ts                         # Global type definitions
│   └── next-auth.d.ts                      # NextAuth type extensions
│
├── .env                                    # Environment variables (not in repo)
├── .gitignore                              # Git ignore rules
├── middleware.ts                           # Next.js middleware for auth
├── next-env.d.ts                           # Next.js TypeScript definitions
├── next.config.js                          # Next.js configuration
├── package.json                            # NPM dependencies and scripts
├── package-lock.json                       # NPM dependency lock file
├── postcss.config.js                       # PostCSS configuration
├── README.md                               # This file - project documentation
├── tailwind.config.ts                      # Tailwind CSS configuration
├── tsconfig.json                           # TypeScript configuration
└── vercel.json                             # Vercel deployment configuration
```

### Key Directories Explained

- **`app/`** - Next.js 13+ App Router directory containing all pages and API routes
- **`components/`** - Reusable React components including UI library (shadcn/ui)
- **`models/`** - Mongoose schemas defining the MongoDB database structure
- **`lib/`** - Helper functions, utilities, and third-party service configurations
- **`public/`** - Static files served directly (images, uploads, etc.)
- **`scripts/`** - Database seeding and maintenance scripts
- **`types/`** - TypeScript type definitions and interfaces
- **`hooks/`** - Custom React hooks for reusable logic

---

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run seed` - Seed database with sample data

---

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login for all user types
- `POST /api/auth/register` - Register new users

### Admin
- `GET /api/admin/colleges` - Get all colleges
- `GET /api/admin/companies` - Get all companies
- `PATCH /api/admin/companies/:id` - Approve/reject companies

### Companies
- `POST /api/companies/jobs` - Create job posting
- `GET /api/companies/jobs` - Get company jobs

### Students
- `GET /api/jobs` - Browse available jobs
- `POST /api/applications` - Apply for a job
- `GET /api/applications` - Get student applications

---


MIT Licen