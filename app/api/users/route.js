import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export function GET() {
  const getusers = [
    {
      name: "huzifa",
      email: "this@gmail.com",
    },

    {
      city: "peshawar",
      phone: "1234567",
    },
  ];

  return NextResponse.json(getusers);
}
//=-----------

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, email, password } = body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    let userExist = false;
    // console.log("this is the request body", body);
    let checkuser = await prisma.user.findFirst({
      where: {
        OR: [
          {
            username: username,
          },
          { email: email },
        ],
      },
    });
    if (checkuser) {
      userExist = true;
      return NextResponse.json(
        {
          userExist,
          message: "User already created",
        },
        { status: 201 },
      );
    }

    let user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });
    return NextResponse.json(
      {
        message: "the user is created with the credientils",
        user,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export function PUT() {}

export function DELETE() {}
