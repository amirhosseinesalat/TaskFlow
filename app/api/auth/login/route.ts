import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 },
      );
    }

    await connectDB();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
