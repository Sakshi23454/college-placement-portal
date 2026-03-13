import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Load environment variables
dotenv.config({ path: resolve(process.cwd(), ".env") });

// Import models
import Admin from "../models/Admin";
import College from "../models/College";
import Company from "../models/Company";
import Student from "../models/Student";
import Job from "../models/Job";
import Application from "../models/Application";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/college-job-portal";

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log("✓ Connected to MongoDB");

    // Clear existing data
    await Promise.all([
      Admin.deleteMany({}),
      College.deleteMany({}),
      Company.deleteMany({}),
      Student.deleteMany({}),
      Job.deleteMany({}),
      Application.deleteMany({}),
    ]);
    console.log("✓ Cleared existing data");

    // Hash password
    const hashedPassword = await bcrypt.hash("password123", 12);

    // Create Admin
    const admin = await Admin.create({
      email: "admin@mgmu.ac.in",
      password: hashedPassword,
      name: "System Administrator",
    });
    console.log("✓ Created admin account");

    // Create College
    const colleges = await College.insertMany([
      {
        name: "MGM University",
        email: "mgm@mgmu.ac.in",
        password: hashedPassword,
        address: "N-6, CIDCO",
        city: "Nanded",
        state: "Maharashtra",
        phone: "9876543210",
        establishedYear: 1989,
      },
    ]);
    console.log(`✓ Created ${colleges.length} college`);

    // Create Companies
    const companies = await Company.insertMany([
      {
        name: "Infosys",
        email: "hr@infosys.com",
        password: hashedPassword,
        website: "https://www.infosys.com",
        industry: "Information Technology",
        size: "1000+",
        description: "Global leader in next-generation digital services and consulting",
        address: "Electronics City",
        city: "Bangalore",
        state: "Karnataka",
        phone: "9876543201",
        isApproved: true,
      },
      {
        name: "Tech Mahindra",
        email: "careers@techmahindra.com",
        password: hashedPassword,
        website: "https://www.techmahindra.com",
        industry: "Information Technology",
        size: "1000+",
        description: "Leading provider of digital transformation, consulting and business re-engineering services",
        address: "Hinjewadi",
        city: "Pune",
        state: "Maharashtra",
        phone: "9876543202",
        isApproved: true,
      },
      {
        name: "Wipro",
        email: "recruitment@wipro.com",
        password: hashedPassword,
        website: "https://www.wipro.com",
        industry: "Information Technology",
        size: "1000+",
        description: "Leading global information technology, consulting and business process services company",
        address: "Sarjapur Road",
        city: "Bangalore",
        state: "Karnataka",
        phone: "9876543203",
        isApproved: true,
      },
      {
        name: "TCS",
        email: "jobs@tcs.com",
        password: hashedPassword,
        website: "https://www.tcs.com",
        industry: "Information Technology",
        size: "1000+",
        description: "Leading global IT services, consulting and business solutions organization",
        address: "TCS House",
        city: "Mumbai",
        state: "Maharashtra",
        phone: "9876543204",
        isApproved: true,
      },
      {
        name: "Accenture",
        email: "careers@accenture.com",
        password: hashedPassword,
        website: "https://www.accenture.com",
        industry: "Information Technology",
        size: "1000+",
        description: "Global professional services company with leading capabilities in digital, cloud and security",
        address: "DLF Cyber City",
        city: "Hyderabad",
        state: "Telangana",
        phone: "9876543205",
        isApproved: true,
      },
    ]);
    console.log(`✓ Created ${companies.length} companies`);

    // Create Students
    const students = await Student.insertMany([
      {
        email: "aarav.sharma@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Aarav",
        lastName: "Sharma",
        collegeId: colleges[0]._id,
        rollNumber: "CS2021001",
        stream: "Computer Science",
        graduationYear: 2025,
        cgpa: 8.5,
        phone: "9876543301",
        skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      },
      {
        email: "ananya.patel@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Ananya",
        lastName: "Patel",
        collegeId: colleges[0]._id,
        rollNumber: "CS2021002",
        stream: "Computer Science",
        graduationYear: 2025,
        cgpa: 9.0,
        phone: "9876543302",
        skills: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"],
      },
      {
        email: "arjun.kumar@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Arjun",
        lastName: "Kumar",
        collegeId: colleges[0]._id,
        rollNumber: "IT2021001",
        stream: "Information Technology",
        graduationYear: 2025,
        cgpa: 7.8,
        phone: "9876543303",
        skills: ["Java", "Spring Boot", "MySQL", "Docker"],
      },
      {
        email: "diya.singh@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Diya",
        lastName: "Singh",
        collegeId: colleges[0]._id,
        rollNumber: "EC2021001",
        stream: "Electronics",
        graduationYear: 2025,
        cgpa: 8.2,
        phone: "9876543304",
        skills: ["Embedded Systems", "IoT", "C++", "Arduino"],
      },
      {
        email: "ishaan.verma@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Ishaan",
        lastName: "Verma",
        collegeId: colleges[0]._id,
        rollNumber: "CS2021003",
        stream: "Computer Science",
        graduationYear: 2025,
        cgpa: 8.8,
        phone: "9876543305",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      },
      {
        email: "kavya.gupta@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Kavya",
        lastName: "Gupta",
        collegeId: colleges[0]._id,
        rollNumber: "IT2021002",
        stream: "Information Technology",
        graduationYear: 2025,
        cgpa: 8.0,
        phone: "9876543306",
        skills: ["Java", "Python", "SQL", "AWS"],
      },
      {
        email: "rohan.reddy@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Rohan",
        lastName: "Reddy",
        collegeId: colleges[0]._id,
        rollNumber: "CS2021004",
        stream: "Computer Science",
        graduationYear: 2025,
        cgpa: 7.5,
        phone: "9876543307",
        skills: ["JavaScript", "Vue.js", "Firebase", "MongoDB"],
      },
      {
        email: "saanvi.nair@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Saanvi",
        lastName: "Nair",
        collegeId: colleges[0]._id,
        rollNumber: "IT2021003",
        stream: "Information Technology",
        graduationYear: 2025,
        cgpa: 8.6,
        phone: "9876543308",
        skills: ["Python", "Django", "PostgreSQL", "Docker"],
      },
      {
        email: "vihaan.joshi@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Vihaan",
        lastName: "Joshi",
        collegeId: colleges[0]._id,
        rollNumber: "EC2021002",
        stream: "Electronics",
        graduationYear: 2025,
        cgpa: 7.9,
        phone: "9876543309",
        skills: ["C", "VLSI Design", "Embedded C", "Microcontrollers"],
      },
      {
        email: "aisha.khan@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Aisha",
        lastName: "Khan",
        collegeId: colleges[0]._id,
        rollNumber: "CS2021005",
        stream: "Computer Science",
        graduationYear: 2025,
        cgpa: 9.2,
        phone: "9876543310",
        skills: ["Python", "Machine Learning", "Deep Learning", "NLP"],
      },
      {
        email: "dev.mehta@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Dev",
        lastName: "Mehta",
        collegeId: colleges[0]._id,
        rollNumber: "CS2021006",
        stream: "Computer Science",
        graduationYear: 2025,
        cgpa: 8.3,
        phone: "9876543311",
        skills: ["Angular", "TypeScript", "Node.js", "PostgreSQL"],
      },
      {
        email: "myra.das@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Myra",
        lastName: "Das",
        collegeId: colleges[0]._id,
        rollNumber: "IT2021004",
        stream: "Information Technology",
        graduationYear: 2025,
        cgpa: 8.7,
        phone: "9876543312",
        skills: ["React Native", "Flutter", "Firebase", "MongoDB"],
      },
      {
        email: "aditya.rao@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Aditya",
        lastName: "Rao",
        collegeId: colleges[0]._id,
        rollNumber: "IT2021005",
        stream: "Information Technology",
        graduationYear: 2025,
        cgpa: 7.6,
        phone: "9876543313",
        skills: ["Java", "Kotlin", "Android", "REST API"],
      },
      {
        email: "navya.iyer@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Navya",
        lastName: "Iyer",
        collegeId: colleges[0]._id,
        rollNumber: "EC2021003",
        stream: "Electronics",
        graduationYear: 2025,
        cgpa: 8.1,
        phone: "9876543314",
        skills: ["MATLAB", "Signal Processing", "Arduino", "PCB Design"],
      },
      {
        email: "reyansh.bansal@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Reyansh",
        lastName: "Bansal",
        collegeId: colleges[0]._id,
        rollNumber: "CS2021007",
        stream: "Computer Science",
        graduationYear: 2025,
        cgpa: 8.9,
        phone: "9876543315",
        skills: ["C++", "DSA", "System Design", "Competitive Programming"],
      },
      {
        email: "zara.desai@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Zara",
        lastName: "Desai",
        collegeId: colleges[0]._id,
        rollNumber: "CS2021008",
        stream: "Computer Science",
        graduationYear: 2025,
        cgpa: 8.4,
        phone: "9876543316",
        skills: ["Python", "Flask", "REST API", "MongoDB"],
      },
      {
        email: "ayaan.pandey@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Ayaan",
        lastName: "Pandey",
        collegeId: colleges[0]._id,
        rollNumber: "IT2021006",
        stream: "Information Technology",
        graduationYear: 2025,
        cgpa: 7.7,
        phone: "9876543317",
        skills: ["JavaScript", "Express.js", "MySQL", "Git"],
      },
      {
        email: "kiara.bhatt@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Kiara",
        lastName: "Bhatt",
        collegeId: colleges[0]._id,
        rollNumber: "CS2021009",
        stream: "Computer Science",
        graduationYear: 2025,
        cgpa: 8.6,
        phone: "9876543318",
        skills: ["React", "Redux", "Node.js", "AWS"],
      },
      {
        email: "vivaan.shah@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Vivaan",
        lastName: "Shah",
        collegeId: colleges[0]._id,
        rollNumber: "EC2021004",
        stream: "Electronics",
        graduationYear: 2025,
        cgpa: 7.8,
        phone: "9876543319",
        skills: ["Verilog", "Digital Design", "FPGA", "Circuit Design"],
      },
      {
        email: "prisha.malhotra@mgmu.ac.in",
        password: hashedPassword,
        firstName: "Prisha",
        lastName: "Malhotra",
        collegeId: colleges[0]._id,
        rollNumber: "IT2021007",
        stream: "Information Technology",
        graduationYear: 2025,
        cgpa: 8.5,
        phone: "9876543320",
        skills: ["Java", "Spring", "Hibernate", "Oracle"],
      },
    ]);
    console.log(`✓ Created ${students.length} students`);

    // Create Jobs
    const jobs = await Job.insertMany([
      {
        companyId: companies[0]._id, // Infosys
        title: "Software Engineer",
        description: "Join Infosys as a Software Engineer to work on cutting-edge technologies.",
        requirements: [
          "Strong programming skills in Java or Python",
          "Good understanding of data structures and algorithms",
          "Excellent problem-solving abilities",
        ],
        skills: ["Java", "Python", "SQL", "Problem Solving"],
        location: "Bangalore",
        jobType: "Full-time",
        salary: {
          min: 400000,
          max: 600000,
          currency: "INR",
        },
        allowedColleges: [colleges[0]._id],
        allowedStreams: ["Computer Science", "Information Technology"],
        minCGPA: 7.0,
        applicationDeadline: new Date("2025-12-31"),
        isActive: true,
      },
      {
        companyId: companies[0]._id, // Infosys
        title: "System Engineer Trainee",
        description: "Kickstart your career with Infosys as a System Engineer Trainee.",
        requirements: [
          "BE/B.Tech in CS/IT/Electronics",
          "Good communication skills",
          "Willingness to learn new technologies",
        ],
        skills: ["C", "C++", "Java", "Communication"],
        location: "Pune",
        jobType: "Full-time",
        salary: {
          min: 350000,
          max: 450000,
          currency: "INR",
        },
        allowedColleges: [colleges[0]._id],
        allowedStreams: ["Computer Science", "Information Technology", "Electronics"],
        minCGPA: 6.5,
        applicationDeadline: new Date("2025-11-30"),
        isActive: true,
      },
      {
        companyId: companies[1]._id, // Tech Mahindra
        title: "Associate Software Engineer",
        description: "Join Tech Mahindra's innovative team as an Associate Software Engineer.",
        requirements: [
          "Knowledge of programming languages",
          "Understanding of software development lifecycle",
          "Team player with good analytical skills",
        ],
        skills: ["Java", "JavaScript", "React", "Node.js"],
        location: "Pune",
        jobType: "Full-time",
        salary: {
          min: 380000,
          max: 500000,
          currency: "INR",
        },
        allowedColleges: [colleges[0]._id],
        allowedStreams: ["Computer Science", "Information Technology"],
        minCGPA: 7.0,
        applicationDeadline: new Date("2025-12-15"),
        isActive: true,
      },
      {
        companyId: companies[1]._id, // Tech Mahindra
        title: "Network Engineer",
        description: "Tech Mahindra is looking for Network Engineers to manage network infrastructure.",
        requirements: [
          "Knowledge of networking concepts",
          "Understanding of TCP/IP, routing protocols",
          "Certifications like CCNA preferred",
        ],
        skills: ["Networking", "TCP/IP", "Routing", "Switching"],
        location: "Hyderabad",
        jobType: "Full-time",
        salary: {
          min: 400000,
          max: 550000,
          currency: "INR",
        },
        allowedColleges: [colleges[0]._id],
        allowedStreams: ["Computer Science", "Information Technology", "Electronics"],
        minCGPA: 7.0,
        applicationDeadline: new Date("2025-12-20"),
        isActive: true,
      },
      {
        companyId: companies[2]._id, // Wipro
        title: "Project Engineer",
        description: "Wipro is hiring Project Engineers for various technology projects.",
        requirements: [
          "Strong fundamentals in computer science",
          "Good coding skills",
          "Ability to work in team environment",
        ],
        skills: ["Java", "Python", "SQL", "Agile"],
        location: "Bangalore",
        jobType: "Full-time",
        salary: {
          min: 380000,
          max: 500000,
          currency: "INR",
        },
        allowedColleges: [colleges[0]._id],
        allowedStreams: ["Computer Science", "Information Technology"],
        minCGPA: 6.5,
        applicationDeadline: new Date("2025-12-31"),
        isActive: true,
      },
      {
        companyId: companies[2]._id, // Wipro
        title: "Data Analyst",
        description: "Join Wipro as a Data Analyst to derive insights from complex datasets.",
        requirements: [
          "Strong analytical skills",
          "Knowledge of SQL and data visualization tools",
          "Understanding of statistics",
        ],
        skills: ["SQL", "Python", "Excel", "Tableau", "Power BI"],
        location: "Chennai",
        jobType: "Full-time",
        salary: {
          min: 400000,
          max: 550000,
          currency: "INR",
        },
        allowedColleges: [colleges[0]._id],
        allowedStreams: ["Computer Science", "Information Technology"],
        minCGPA: 7.0,
        applicationDeadline: new Date("2025-12-10"),
        isActive: true,
      },
      {
        companyId: companies[3]._id, // TCS
        title: "Assistant Systems Engineer",
        description: "TCS is looking for Assistant Systems Engineers to join our team.",
        requirements: [
          "BE/B.Tech in relevant discipline",
          "Good academic record",
          "Strong problem-solving skills",
        ],
        skills: ["C", "Java", "Python", "Problem Solving"],
        location: "Mumbai",
        jobType: "Full-time",
        salary: {
          min: 360000,
          max: 480000,
          currency: "INR",
        },
        allowedColleges: [colleges[0]._id],
        allowedStreams: ["Computer Science", "Information Technology", "Electronics"],
        minCGPA: 6.0,
        applicationDeadline: new Date("2025-12-31"),
        isActive: true,
      },
      {
        companyId: companies[3]._id, // TCS
        title: "Digital Software Engineer",
        description: "Join TCS Digital to work on innovative digital solutions.",
        requirements: [
          "Strong coding skills",
          "Knowledge of modern web technologies",
          "Passion for technology and innovation",
        ],
        skills: ["JavaScript", "React", "Angular", "Node.js", "MongoDB"],
        location: "Bangalore",
        jobType: "Full-time",
        salary: {
          min: 700000,
          max: 900000,
          currency: "INR",
        },
        allowedColleges: [colleges[0]._id],
        allowedStreams: ["Computer Science", "Information Technology"],
        minCGPA: 8.0,
        applicationDeadline: new Date("2025-11-30"),
        isActive: true,
      },
      {
        companyId: companies[4]._id, // Accenture
        title: "Application Development Associate",
        description: "Accenture is hiring Application Development Associates for various projects.",
        requirements: [
          "Knowledge of programming languages",
          "Good communication skills",
          "Team collaboration abilities",
        ],
        skills: ["Java", "Python", "SQL", "Communication"],
        location: "Hyderabad",
        jobType: "Full-time",
        salary: {
          min: 450000,
          max: 600000,
          currency: "INR",
        },
        allowedColleges: [colleges[0]._id],
        allowedStreams: ["Computer Science", "Information Technology"],
        minCGPA: 7.0,
        applicationDeadline: new Date("2025-12-20"),
        isActive: true,
      },
      {
        companyId: companies[4]._id, // Accenture
        title: "Technology Consulting Analyst",
        description: "Join Accenture as a Technology Consulting Analyst to solve complex business problems.",
        requirements: [
          "Strong analytical and problem-solving skills",
          "Knowledge of technology trends",
          "Excellent communication and presentation skills",
        ],
        skills: ["Business Analysis", "Technology Consulting", "Communication", "Problem Solving"],
        location: "Bangalore",
        jobType: "Full-time",
        salary: {
          min: 600000,
          max: 800000,
          currency: "INR",
        },
        allowedColleges: [colleges[0]._id],
        allowedStreams: ["Computer Science", "Information Technology"],
        minCGPA: 7.5,
        applicationDeadline: new Date("2025-12-15"),
        isActive: true,
      },
    ]);
    console.log(`✓ Created ${jobs.length} jobs`);

    // Create Applications
    const applications = await Application.insertMany([
      {
        jobId: jobs[0]._id,
        studentId: students[0]._id,
        status: "applied",
        coverLetter: "I am very interested in this position and believe my skills align well.",
      },
      {
        jobId: jobs[0]._id,
        studentId: students[1]._id,
        status: "shortlisted",
        coverLetter: "I have strong programming skills and eager to join Infosys.",
      },
      {
        jobId: jobs[1]._id,
        studentId: students[2]._id,
        status: "applied",
        coverLetter: "I would love to work as a System Engineer Trainee at Infosys.",
      },
      {
        jobId: jobs[2]._id,
        studentId: students[3]._id,
        status: "applied",
        coverLetter: "I am eager to contribute to Tech Mahindra's innovative projects.",
      },
      {
        jobId: jobs[3]._id,
        studentId: students[4]._id,
        status: "shortlisted",
        coverLetter: "My networking knowledge makes me a perfect fit for this role.",
      },
      {
        jobId: jobs[4]._id,
        studentId: students[5]._id,
        status: "applied",
        coverLetter: "Excited to work on technology projects at Wipro.",
      },
      {
        jobId: jobs[5]._id,
        studentId: students[6]._id,
        status: "hired",
        coverLetter: "I have strong analytical skills and experience with data analysis tools.",
      },
      {
        jobId: jobs[6]._id,
        studentId: students[7]._id,
        status: "applied",
        coverLetter: "Looking forward to starting my career with TCS.",
      },
      {
        jobId: jobs[7]._id,
        studentId: students[8]._id,
        status: "shortlisted",
        coverLetter: "Passionate about digital technologies and innovation.",
      },
      {
        jobId: jobs[8]._id,
        studentId: students[9]._id,
        status: "applied",
        coverLetter: "Ready to contribute to Accenture's application development projects.",
      },
      {
        jobId: jobs[9]._id,
        studentId: students[10]._id,
        status: "applied",
        coverLetter: "My analytical skills and technology knowledge make me a great fit.",
      },
      {
        jobId: jobs[0]._id,
        studentId: students[11]._id,
        status: "rejected",
        coverLetter: "Interested in software engineering role at Infosys.",
      },
    ]);
    console.log(`✓ Created ${applications.length} applications`);

    console.log("\n✅ Database seeded successfully!");
    console.log("\n📋 Sample Credentials:");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("\n🔐 Admin:");
    console.log("   Email: admin@mgmu.ac.in");
    console.log("   Password: password123");
    console.log("\n🏫 College - MGM University:");
    console.log("   Email: mgm@mgmu.ac.in");
    console.log("   Password: password123");
    console.log("\n🏢 Company 1 - Infosys:");
    console.log("   Email: hr@infosys.com");
    console.log("   Password: password123");
    console.log("\n🏢 Company 2 - Tech Mahindra:");
    console.log("   Email: careers@techmahindra.com");
    console.log("   Password: password123");
    console.log("\n🏢 Company 3 - Wipro:");
    console.log("   Email: recruitment@wipro.com");
    console.log("   Password: password123");
    console.log("\n🏢 Company 4 - TCS:");
    console.log("   Email: jobs@tcs.com");
    console.log("   Password: password123");
    console.log("\n🏢 Company 5 - Accenture:");
    console.log("   Email: careers@accenture.com");
    console.log("   Password: password123");
    console.log("\n🎓 Student 1 - Aarav Sharma (CS):");
    console.log("   Email: aarav.sharma@mgmu.ac.in");
    console.log("   Password: password123");
    console.log("\n🎓 Student 2 - Ananya Patel (CS):");
    console.log("   Email: ananya.patel@mgmu.ac.in");
    console.log("   Password: password123");
    console.log("\n🎓 Student 3 - Arjun Kumar (IT):");
    console.log("   Email: arjun.kumar@mgmu.ac.in");
    console.log("   Password: password123");
    console.log("\n🎓 Student 4 - Diya Singh (EC):");
    console.log("   Email: diya.singh@mgmu.ac.in");
    console.log("   Password: password123");
    console.log("\n... (16 more students with @mgmu.ac.in emails)");
    console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

// Run seed
seedDatabase();