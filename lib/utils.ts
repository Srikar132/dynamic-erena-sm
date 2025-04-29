import { Trophy } from 'lucide-react';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Gamepad } from 'lucide-react';
import { GrAchievement, GrUser } from 'react-icons/gr';
import { Tournament } from '@/types/type';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const games = [
  {
    id: "0",
    title : "Garena Free Fire Max",
    name: "freefire",
    image: "https://tse4.mm.bing.net/th?id=OIP.Jcud0tUk-IX3U9GPYKRe2wHaEW&pid=Api&P=0&h=180",
    genre: "Battle Royale",
  },
  {
    id: "1",
    title : "Battle Grounds Mobile India",
    name: "bgmi",
    image: "https://tse4.mm.bing.net/th?id=OIP.vGNWrEHYEp4KNVIbwNaUEAHaEK&pid=Api&P=0&h=180",
    genre: "Classic Erangle",
  },
  {
    id: "2",
    title : "Chess",
    name: "chess",
    image: "https://tse4.mm.bing.net/th?id=OIP.fY2Dc5iuCoTOOKAHgzDpdAHaE8&pid=Api&P=0&h=180",
    genre: "chess",
  },

]


export const leaderboardRanks = [
  {
    "id" : 90,
    "teamName" : "Team Titans",
    "points" : 1000,
    "wins" : 5
  },
  {
    "id" : 19,
    "teamName" : "Team Rockets",
    "points" : 1000,
    "wins" : 5
  },
  {
    "id" : 10,
    "teamName" : "Team Titans",
    "points" : 1000,
    "wins" : 5
  },
  {
    "id" : 0,
    "teamName" : "Team Titans",
    "points" : 1000,
    "wins" : 5
  },
  {
    "id" : 1,
    "teamName" : "Team Titans",
    "points" : 1000,
    "wins" : 5
  },
  {
    "id" : 2,
    "teamName" : "Team Titans",
    "points" : 1000,
    "wins" : 5
  },
  {
    "id" : 3,
    "teamName" : "Team Titans",
    "points" : 1000,
    "wins" : 5
  },
  {
    "id" : 4,
    "teamName" : "Team Titans",
    "points" : 1000,
    "wins" : 5
  },
]


export const tournaments = [
  {
    _id: "t1",
    title: "VALORANT Champions Tour 2025",
    game: "VALORANT",
    entryFee: 50,
    startDate: "2025-03-15T14:00:00Z",
    registrationDeadline: "2025-03-10T23:59:59Z",
    status: "registration-open",
    registeredTeams: [
      { _ref: "team1" },
      { _ref: "team2" },
      { _ref: "team3" }
    ],
    maxTeams: 16,
    prizePool: 25000
  },
  // {
  //   _id: "t2",
  //   title: "CS2 Masters League",
  //   game: "Counter-Strike 2",
  //   entryFee: 75,
  //   startDate: "2025-03-20T16:00:00Z",
  //   registrationDeadline: "2025-03-18T23:59:59Z",
  //   status: "upcoming",
  //   registeredTeams: [
  //     { _ref: "team4" },
  //     { _ref: "team5" }
  //   ],
  //   maxTeams: 8,
  //   prizePool: 15000
  // },
];

export const tournamentDummyData: Tournament[] = [
  {
    "_id": "t1",
    "title": "BGMI Pro League Season 1",
    "game": "bgmi",
    "entryFee": 500,
    "startDate": "2024-03-15T14:00:00Z",
    "endDate": "2024-03-20T18:00:00Z",
    "registrationDeadline": "2024-03-14T23:59:59Z",
    "status": "registration-open",
    "registeredTeams": [
      { "_id": "123" }
    ],
    "maxTeams": 16,
    "prizePool": 50000,
    "prizes": {
      "1st": 25000,
      "2nd": 15000,
      "3rd": 10000
    },
    "platform": "Mobile",
    "matchFormat": "Squads",
    "mode": "TPP",
    "serverRegion": "Asia",
    "bracketType": "Single Elimination",
    "rules": "- 🚫 No emulator players allowed\n- ⏰ All players must check-in 30 minutes before the match\n- ⚠️ Any form of cheating will result in disqualification\n- 📢 Players must join the tournament Discord server for updates",
    "organizer": {
      "name": "XYZ eSports",
      "contact": "xyz@gmail.com",
      "website": "https://xyz-esports.com"
    },
    "streaming": {
      "isStreamed": true,
      "platforms": ["YouTube", "Twitch"],
      "link": "https://youtube.com/xyz-esports"
    },
    "pitch": "##  Welcome to the BGMI Pro League Season 1!\n\nJoin the **biggest** battleground where the **best teams** fight for glory and a **₹50,000 prize pool**! Get ready for intense matches, strategic gameplay, and a battle to claim the **championship title!**\n\nA tournament is a structured competition where individuals or teams compete against each other to determine a winner. It can be organized in various formats, such as single-elimination, double-elimination, round-robin, or league-based play. Tournaments are held in different fields, including sports, eSports, academics, and business, fostering competition, skill development, and teamwork.",
    "_createdAt": "2024-03-15T14:00:00Z",
    "_updatedAt": "2024-03-15T14:00:00Z"
  }
];


export type GameType = 'bgmi' | 'freefire' | 'chess';
export const gameImages: Record<GameType, string> = {
    bgmi: "https://wallpaperaccess.com/full/7447747.jpg",
    freefire: "https://wallpaperaccess.com/full/1885360.jpg",
    chess: "https://wallpaperaccess.com/thumb/3289425.jpg",
};

export type Status = "registration-open" | "in-progress" | "completed" | "registration-closed" | "upcoming"
export const statusColors: Record<Status, string> = {
  "registration-open": "bg-primary_green text-primary_bg",
  "in-progress": "bg-blue-500 text-white",
  "completed": "bg-gray-600 text-white",
  "registration-closed": "bg-orange-600 text-white",
  "upcoming": "bg-purple-500 text-white"
};



export type StatType = {
  title : string;
  value : number;
  Icon : any,
  trend : {
    value : string;
    isPositive : boolean
  };
  description : string;
}

export const tournamentStats : StatType[]  = [
  {
    title: "Total Tournaments",
    value: 25,
    Icon: Trophy, 
    trend: {value : "+10%" , isPositive : true},
    description: "Total tournaments hosted this month",
  },
  {
    title: "Active Tournaments",
    value: 5,
    Icon: Gamepad,
    trend: { value : "+5%" , isPositive : false},
    description: "Ongoing tournaments currently in progress",
  },
  {
    title: "Registered Players",
    value: 1200,
    Icon: GrUser,
    trend: {value : "+15%" , isPositive : true},
    description: "Total players registered across all tournaments",
  },
  {
    title: "Upcoming Tournaments",
    value: 8,
    Icon: GrAchievement,
    trend: {value : "-2%" , isPositive : false},
    description: "Tournaments scheduled for the upcoming weeks",
  },
];
