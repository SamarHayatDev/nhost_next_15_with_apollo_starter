// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const accessToken =
    request.cookies.get("nhostRefreshToken")?.value ||
    request.nextUrl.searchParams.get("refreshToken");

  const isLoginPath = request.nextUrl.pathname === "/login";

  if (isLoginPath) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login"],
};
