import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Company from "@/models/Company";
import { apiError, apiResponse } from "@/lib/middleware";
import bcrypt from "bcryptjs";
import { EmailService } from "@/lib/email";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return apiError("Unauthorized", 401);
    }

    await dbConnect();

    const { searchParams } = new URL(req.url);
    const filter = searchParams.get("filter");

    let query = {};
    if (filter === "pending") {
      query = { isApproved: false };
    } else if (filter === "approved") {
      query = { isApproved: true };
    }

    const companies = await Company.find(query)
      .select("-password")
      .sort({ createdAt: -1 })
      .lean();

    return apiResponse({ companies });
  } catch (error: any) {
    return apiError(error.message || "Failed to fetch companies", 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return apiError("Unauthorized", 401);
    }

    await dbConnect();

    const body = await req.json();
    const {
      name,
      email,
      industry,
      size,
      city,
      state,
      description,
      website,
      isApproved,
    } = body;

    // Validation
    if (!name || !email || !industry || !size || !city || !state) {
      return apiError("All required fields must be provided", 400);
    }

    // Check if email already exists
    const existingCompany = await Company.findOne({ email: email.toLowerCase() });
    if (existingCompany) {
      return apiError("Company with this email already exists", 400);
    }

    // Generate temporary password (company name first word + random 4 digits)
    const companyFirstWord = name.split(" ")[0].toLowerCase();
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const tempPassword = `${companyFirstWord}${randomDigits}`;
    const hashedPassword = await bcrypt.hash(tempPassword, 12);

    // Create company
    const company = await Company.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      industry,
      size,
      city,
      state,
      description,
      website,
      isApproved: isApproved !== undefined ? isApproved : true,
      isEmailVerified: true,
    });

    // Send welcome email with credentials
    const loginEmail = {
      subject: "Your College Job Portal Account Details",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #800000;">Your Company Account Has Been Created</h2>
          <p>Hello ${name} Team,</p>
          <p>An admin has created an account for your company on the College Job Portal.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-left: 4px solid #800000; margin: 20px 0;">
            <p><strong>Login Email:</strong> ${email}</p>
            <p><strong>Temporary Password:</strong> ${tempPassword}</p>
          </div>
          <p style="color: #d9534f;"><strong>Important:</strong> Please change your password after your first login.</p>
          <p>
            <a href="${process.env.NEXTAUTH_URL}/auth/signin?role=company"
               style="background-color: #800000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">
              Login Now
            </a>
          </p>
          <p>After logging in, you can:</p>
          <ul>
            <li>Complete your company profile</li>
            <li>Post job openings</li>
            <li>Review student applications</li>
            <li>Manage your job listings</li>
          </ul>
          <br/>
          <p>Best regards,<br/>College Job Portal Team</p>
        </div>
      `,
    };

    await EmailService.sendWelcomeEmail(email, name, "Company");

    // Send custom login credentials email
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.FROM_PASS,
      },
    });

    await transporter.sendMail({
      from: `College Job Portal <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: loginEmail.subject,
      html: loginEmail.html,
    }).catch((err: any) => console.error("Login email error:", err));

    return apiResponse(
      {
        message: "Company added successfully. Login credentials sent to email.",
        company: {
          _id: company._id,
          name: company.name,
          email: company.email,
          industry: company.industry,
        },
      },
      201
    );
  } catch (error: any) {
    console.error("Add company error:", error);
    return apiError(error.message || "Failed to add company", 500);
  }
}