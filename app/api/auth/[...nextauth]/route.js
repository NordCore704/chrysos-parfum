import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email }).lean(); // Convert to plain object

          if (!user) return null;

          const matchPassword = await bcrypt.compare(password, user.password);
          if (!matchPassword) return null;

          return {
            id: user._id.toString(),
            email: user.email,
            firstName: user.firstName,
            secondName: user.secondName,
          };
        } catch (error) {
          console.error("Error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  cookies: {
    useSecureCookies: process.env.NODE_ENV === "production",
  },
  pages: {
    signIn: "/auth/login",
    newUser: null, // Disable "new user" page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.secondName = user.secondName;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        firstName: token.firstName,
        secondName: token.secondName,
      };
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };