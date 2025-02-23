import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { client } from "./sanity/lib/client"
import { GET_PLAYER_BY_ID } from "./sanity/lib/queries"
import { writeClient } from "./sanity/lib/write-client"
import { Player } from "./sanity/types"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ profile, user }) {
      if (!profile) {
        console.log("Error in GOOGLE LOGIN: Profile not found");
        return false;
      }

      try {
        const existingPlayer = await client.withConfig({ useCdn: false }).fetch(
          GET_PLAYER_BY_ID,
          { email: profile.email } 
        );

        if (!existingPlayer) {
          await writeClient.create({
            _type: "player",
            name: user.name,
            email: user.email,
            profile: user.image,
            isAdmin: false,
          });
        }
        return true;
      } catch (error) {
        console.error("Error in GOOGLE LOGIN:", error);
        return false;
      }
    },

    async jwt({ token, user, profile }) {
      if (!profile) return token;

      try {
        const player = await client.withConfig({ useCdn: false }).fetch(
          GET_PLAYER_BY_ID,
          { email: profile.email }
        );

        token.player = player;
      } catch (error) {
        console.error("JWT Callback Error:", error);
      }
      return token;
    },

    async session({ session, token }) {
      session.player = token.player || session.player;
      return session;
    },
  }
});