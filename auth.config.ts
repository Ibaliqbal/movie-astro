import { defineConfig } from "auth-astro";
import Google from "@auth/core/providers/google";
import { checkValidUser, registerUser } from "@/lib/supabase/function";

export default defineConfig({
  session: {
    strategy: "jwt",
  },
  secret: import.meta.env.AUTH_SECRET,
  providers: [
    Google({
      clientId: import.meta.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: import.meta.env.GOOGLE_OAUTH_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === "google") {
        const checkUser = await checkValidUser(user.email);

        if (!checkUser.status) {
          await registerUser({
            email: user.email,
            name: user.name,
            image: user.image,
          });
        }
      }

      return token;
    },
    async session({ session }) {
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
