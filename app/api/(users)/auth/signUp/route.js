import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
/*
 * @param {Object} request
 * @returns {Promise} NextResponse
 */
export async function POST(request) {
  try {
    const success = false;
    const { username, email, password } = await request.json();
    console.log("this is data ", username, email, password);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Check user

    const checkuser = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });
    if (checkuser) {
      return NextResponse.json(
        {
          message: "User already created",
        },
        { status: 409 },
        { success },
      );
    }

    //Create user

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    return NextResponse.json(
      {
        message: "User created successfully",
        user,
      },
      { status: 201 },
      { success: true },
    );
    
    /////

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 },
    );
  }
}
