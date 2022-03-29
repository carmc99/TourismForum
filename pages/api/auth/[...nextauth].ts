import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user.estado === "NoAutorizado") return false;

      return true;
    },
    async session({ session, user, token }) {
      console.log(session, user, token);
      const session2 = { ...session, user };
      return session2;
    },
  },
  providers: [
    Auth0Provider({
      wellKnown: "https://forum-hotel.us.auth0.com",
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
      authorization: `https://${process.env.AUTH0_DOMAIN}/authorize?response_type=code&prompt=login`,
    }),
  ],
  secret: process.env.AUTH0_SECRET,
});
