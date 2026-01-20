import { clerkMiddleware } from '@clerk/nextjs/server'

// The function must be named 'proxy' or be the default export in proxy.ts
export default clerkMiddleware() 

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}