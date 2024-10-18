import { users } from "@/shared/constants/mockData";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
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
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      authorize: async (credatial) => {
        if (credatial.email && credatial.password) {
          const currentUser = users.find(
            (user) => user.email === credatial.email,
          );

          if (currentUser && currentUser.password === credatial.password) {
            return {
              email: currentUser.email,
              name: currentUser.username,
              id: `${Date.now()}`,
            };
          }
        }
        return null;
      },
    }),
  ],
});
