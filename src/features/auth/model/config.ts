import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import { handleAuthUser } from "./api/authUser";

export const {
  handlers,
  auth,
  signIn: signInServer,
  signOut: signOutServer,
} = NextAuth({
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  logger: {
    debug(message, metadata) {
      console.log("debug", message, metadata);
    },
    error(error) {
      console.log("error", error);
    },
    warn(code) {
      console.log("code", code);
    },
  },

  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Facebook({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },

      authorize: async (credentials) => {
        if (credentials.email && credentials.password) {
          return await handleAuthUser({
            email: credentials.email as string,
            password: credentials.password as string,
          });
        }

        return null;
      },
    }),
  ],
});
