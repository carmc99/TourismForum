import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    Auth0Provider({
      wellKnown: 'https://forum-hotel.us.auth0.com',
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER
    })
  ],
})