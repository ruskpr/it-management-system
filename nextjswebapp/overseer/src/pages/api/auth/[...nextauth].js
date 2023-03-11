import NextAuth from "next-auth";
import SessionProvider from "next-auth/react";
import GitHubProvider from "next-auth/providers/github";
export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: "9d0cf42dd75035edadfeda77ee215e34a6c86c65",
    }),
  ],
  secret: "test"
});
