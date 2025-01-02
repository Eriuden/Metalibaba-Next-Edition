import NextAuth from "next-auth"
import Github from "next-auth/providers/github"

//Un système qui permet de s'autentifier par un tier, du genre google, fb, etc
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Github],
})