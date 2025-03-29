// // middleware.ts
// import { NextRequest, NextResponse } from 'next/server';

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Define public routes that don’t require authentication
//   const publicRoutes = ['/signin', '/register', '/'];
//   if (publicRoutes.includes(pathname)) {
//     return NextResponse.next();
//   }

//   // Check for an authentication token in cookies
//   const token = request.cookies.get('token')?.value; // Adjust the key based on your auth system

//   if (!token) {
//     // Redirect to login if no token is found
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // Optionally, add token verification logic here (e.g., JWT decoding)
//   // Find the session with the matching token
//     const session = await prismaUser.user_sessions.findFirst({
//     where: { token, is_revoked: false },
//     include: { users: true }, // Fetch the related user
//     });

//     if (!session) {
//     return NextResponse.redirect(new URL('/', request.url));
//     }



//   // Proceed to the requested page if authenticated
//   return NextResponse.next();
// }

// // Configure which routes the middleware applies to
// export const config = {
//   matcher: ['/((?!_next|api/auth).*)'], // Exclude Next.js internal routes and auth API routes
// };
