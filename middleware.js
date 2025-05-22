import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";


export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Debugging logs
  console.log('Middleware: Token:', token);
  console.log('Middleware: Pathname:', pathname);

  // Public routes
  const publicRoutes = ['/auth/login', '/auth/signup'];

  // Allow access to public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Protected routes
  const protectedRoutes = ['/dashboard/:path*'];

  const isAccessingProtected = protectedRoutes.some(route =>
    pathname.startsWith(route.replace('/:path*', ''))
  );

  if (isAccessingProtected) {
    if (!token) {
      // Redirect unauthenticated users to the login page
      const loginUrl = new URL('/auth/login', req.url);
      console.log('Middleware: Redirecting to login');
      return NextResponse.redirect(loginUrl);
    }
    console.log('Middleware: User authenticated');
    return NextResponse.next(); // Allow access if authenticated
  }

  // Default fallback: Allow access
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // Applies only to dashboard routes
};
