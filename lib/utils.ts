import { Tournament } from "@/sanity/types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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
    _id: "t1",
    _type: "tournament",
    title: "BGMI Pro League Season 1",
    game: "bgmi",
    entryFee: 500,
    startDate: "2024-03-15T14:00:00Z",
    registrationDeadline: "2024-03-14T23:59:59Z",
    status: "registration-open",
    registeredTeams: [
      { _ref: "team1", _type: "reference", _key: "key1" },
      { _ref: "team2", _type: "reference", _key: "key2" },
      { _ref: "team3", _type: "reference", _key: "key3" }
    ],
    maxTeams: 16,
    prizePool: 50000,
    _createdAt: "2024-03-15T14:00:00Z",
    _updatedAt: "2024-03-15T14:00:00Z",
    _rev: ""
  },
  {
    _id: "t2",
    _type: "tournament",
    title: "Free Fire Battle Royale",
    game: "freefire",
    entryFee: 300,
    startDate: "2024-04-10T18:00:00Z",
    registrationDeadline: "2024-04-08T23:59:59Z",
    status: "registration-open",
    registeredTeams: [
      { _ref: "team4", _type: "reference", _key: "key4" },
      { _ref: "team5", _type: "reference", _key: "key5" }
    ],
    maxTeams: 12,
    prizePool: 30000,
    _createdAt: "2024-04-10T18:00:00Z",
    _updatedAt: "2024-04-10T18:00:00Z",
    _rev: ""
  },
  {
    _id: "t3",
    _type: "tournament",
    title: "Chess Grand Masters",
    game: "chess",
    entryFee: 200,
    startDate: "2024-05-05T12:00:00Z",
    registrationDeadline: "2024-05-03T23:59:59Z",
    status: "upcoming",
    registeredTeams: [
      { _ref: "player1", _type: "reference", _key: "key6" },
      { _ref: "player2", _type: "reference", _key: "key7" }
    ],
    maxTeams: 10,
    prizePool: 20000,
    _createdAt: "2024-05-05T12:00:00Z",
    _updatedAt: "2024-05-05T12:00:00Z",
    _rev: ""
  },
  {
    _id: "t4",
    _type: "tournament",
    title: "Valorant Champions League",
    game: "freefire",
    entryFee: 700,
    startDate: "2024-06-15T19:00:00Z",
    registrationDeadline: "2024-06-12T23:59:59Z",
    status: "registration-closed",
    registeredTeams: [
      { _ref: "team6", _type: "reference", _key: "key8" },
      { _ref: "team7", _type: "reference", _key: "key9" },
      { _ref: "team8", _type: "reference", _key: "key10" }
    ],
    maxTeams: 20,
    prizePool: 60000,
    _createdAt: "2024-06-15T19:00:00Z",
    _updatedAt: "2024-06-15T19:00:00Z",
    _rev: ""
  },
  {
    _id: "t5",
    _type: "tournament",
    title: "Call of Duty Mobile Warfare",
    game: "bgmi",
    entryFee: 400,
    startDate: "2024-07-20T21:00:00Z",
    registrationDeadline: "2024-07-18T23:59:59Z",
    status: "registration-open",
    registeredTeams: [
      { _ref: "team9", _type: "reference", _key: "key11" },
      { _ref: "team10", _type: "reference", _key: "key12" }
    ],
    maxTeams: 14,
    prizePool: 45000,
    _createdAt: "2024-07-20T21:00:00Z",
    _updatedAt: "2024-07-20T21:00:00Z",
    _rev: ""
  }
];
