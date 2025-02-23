import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  console.log(token?.player)
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token.player?.isAdmin) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  
  if(!token.player?.currentTeam) {
    return NextResponse.redirect(new URL("/team/create", req.url));
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ["/"], 
};
