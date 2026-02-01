//  Copied from clerk.com/docs --> quickstart --> proxy.ts + configure the rest (Template) just look to add the protectedRoutes:
//createRouterMatcher fx needs to be imported to be able to match our protected routes
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(["/profile", "/sign-in/(.*)", "/sign-up/(.*)", "/timeline"])


/*clerkMiddleware: 
will compare the route from the list and the current route the user is navigating to --> 
if the current route matches one from the list, it will trigger auth check
In here auth is just a parameter, although auth is also an object in Clerk (which we can import it to use it*/
export default clerkMiddleware(async (auth, req) => {
    if(isProtectedRoute(req)) await auth.protect()
});

export const config = {
    // regexr language
    matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    ],
};