import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import Jwt from "jsonwebtoken";

const prisma = new PrismaClient();
let Secretkey = "thisissecretd";
/**
 *
 * @param {Object} request
 * @returns {Promise}
 */
export async function logInUser(request) {
  try {
    const data = request;
    // console.log("this is body", data);
    const { email, password } = data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "Try to logIn with correct credentials",
        },
        { status: 404 },
      );
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return NextResponse.json(
        {
          message: "Incorrect password",
        },
        { status: 400 },
      );
    }

    const payload = { user: { id: user.id } };
    console.log("this is payload ", payload);
    const authToken = Jwt.sign(payload, Secretkey);
    console.log("this is authtoken", authToken);

    return NextResponse.json(
      {
        message: "Logged in successfully",
        authToken,
        success: true,
        user,
      },
      { status: 200 },
    );
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
/*
 * @param {Object} request
 * @returns {Promise} NextResponse
 */
export async function registerUser(request) {
  try {
    const body = request;
    const { username, email, password } = body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

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
      );
    }

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
    );
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

// export default async function PUT(request) {
//   const data = request.json();
//   console.log("data is ", data);
//   NextResponse(data)
// }
// export function DELETE() {}

// export async function signIn(request) {
//   const data =  await request.json();
//   console.log("Sign in data:", data);
//   // Perform sign-in operations
//   return NextResponse.json({
//     success: true,
//     message: "Signed in successfully",
//   });
// }
