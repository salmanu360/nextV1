import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
// import next from "next";
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
  const { username, email, password } = request.body;
  try {
    let user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            username: username,
          },
          { email: email },
        ],
      },
    });
    if (user) {
      return NextResponse.json({
        message: "User with same credientials exist",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });
    NextResponse.json("user created with the following credientisls", user);
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "Server error" });
  }
}

export function PUT() {}

export function DELETE() {}
