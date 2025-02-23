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