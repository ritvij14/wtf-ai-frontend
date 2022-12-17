import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_API_KEY || "",
      clientSecret: process.env.TWITTER_API_KEY_SECRET || "",
    }),
  ],
});
