

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



declare interface Tournament {
  _id: string;
  title: string;
  game: string;
  entryFee: number;
  startDate: string; // ISO string format
  endDate: string; // ISO string format
  registrationDeadline: string; // ISO string format
  status: "registration-open" | "ongoing" | "completed" | "cancelled"; // Tournament status
  registeredTeams: { _id: string }[]; // Array of registered team IDs
  maxTeams: number;
  prizePool: number;
  prizes: {
    "1st": number;
    "2nd": number;
    "3rd": number;
  };
  platform: "Mobile" | "PC" | "Console";
  matchFormat: "Solo" | "Duo" | "Squads";
  mode: "TPP" | "FPP";
  serverRegion: string;
  bracketType: "Single Elimination" | "Double Elimination" | "Round Robin" | "Swiss";
  rules: string; // Markdown format
  organizer: {
    name: string;
    contact: string;
    website?: string; // Optional
  };
  streaming: {
    isStreamed: boolean;
    platforms: string[];
    link?: string; // Optional if streaming is false
  };
  pitch: string; // Markdown format
  _createdAt: string; // ISO string format
  _updatedAt: string; // ISO string format
}
