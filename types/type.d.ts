

import { Player } from "@/sanity/types"
import { DefaultSession, DefaultUser } from "next-auth"
import { JWT } from "next-auth/jwt"


declare module "next-auth" {
  interface Session {
    player: Player & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    id: string
    name: string
    email: string
    image: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    player?: Player
  }
}


declare interface LeaderBoardRanks {
    id : number;
    teamName : string;
    points : number;
    wins : number
}

declare interface FilterOptions {
  game: string[];
  status: string[];
  prizePool: {min: number; max: number};
  entryFee: {min: number; max: number}
}
