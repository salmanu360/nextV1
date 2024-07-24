import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";
/**
 * Retrieves the authenticated user's data.
 *
 * @param {Object} request - The request object.
 * @param {cookies} request.cookies - The cookies object from the request.
 * @returns {Promise<NextResponse>} A JSON response containing the user's data.
 */
export async function GET(request) {
  try {
    const secretKey = process.env.JWT_SECRET;
    const authToken = request.cookies.get("authToken")?.value;
    const data = jwt.verify(authToken, secretKey);
    console.log("this is id", data.id);
    const user = await prisma.user.findUnique({
      where: { id: data.id },
      select: {
        id: true,
        username: true,
        email: true,
        status: true,
      },
    });
    console.log("this is current userdata", user);
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
  }
}
