import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({  //aqui conf  q paginas son publicas y cuales son privadas

  ignoredRoutes:["/about"] ,  //para q pueda ir sin autenticaciom
  publicRoutes: ["/"]        //otra manera de ir sin autenticacion 

  

});  

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
