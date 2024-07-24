import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();
const secretKey = process.env.JWT_SECRET;
/**
 *
 * @param {Object} request
 * @returns {Promise}
 */
export async function POST(request) {
  const { email, password } = await request.json();
  console.log("this is user data", email, password);

  try {
    // 1.get user
    const userdata = await prisma.user.findUnique({
      where: { email },
    });

    if (!userdata) {
      return NextResponse.json(
        {
          message: "Try to logIn with correct credentials",
        },
        { status: 404 },
      );
    }

    //2.passwordcompare
    const matched = bcrypt.compareSync(password, userdata.password);
    if (!matched) {
      return NextResponse.json(
        {
          message: "Incorrect password",
        },
        { status: 400 },
      );
    }

    // 3.generate jwtToken
    const token = jwt.sign(
      {
        userId: userdata.id,
        name: userdata.name,
      },
      secretKey,
      {
        expiresIn: "1d",
      },
    );
    console.log("this is token", token);

    //5.return the user data(except the pass)
    const { password: _, ...user } = userdata;
    const response = NextResponse.json(
      {
        message: "Log in success!!",
        success: true,
        user,
        token,
      },
      { status: 200 },
    );

    //6.set the cookies with authtoken
    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });
    return response;
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
