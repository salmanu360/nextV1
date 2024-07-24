"use client";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const secretKey = process.env.JWT_SECRET;
  console.log(
    pathname === "/signIn"
      ? `middleware is not activated for ${pathname}`
      : `middleware activated for ${pathname}`,
  );
  if (pathname === "/signIn" || pathname === "/signUp") {
    return NextResponse.next();
  }
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;
  if (!authToken) {
    return NextResponse.redirect(new URL("/404", request.url));
  }
  try {
    const encoder = new TextEncoder();
    const secret = encoder.encode(secretKey); //this is used to convert the secret key to ..
    await jwtVerify(authToken, secret);
    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/404", request.url));
  }
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
