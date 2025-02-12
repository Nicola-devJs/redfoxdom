import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import { handleAuthUser } from "./api/authUser";
import { UserLoginRequest } from "@/app/types/auth";

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

      authorize: async ({ email, password }) => {
        if (typeof email === "string" && typeof password === "string") {
          return await handleAuthUser({ email, password });
        }

        return null;
      },
    }),
  ],
});
