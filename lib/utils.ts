import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const games = [
  {
    id: "0",
    name: "free-fire",
    mainImage: "/free-fire.jpg",
    titleImage: "/ff-name.png",
    url: '/events?query=freefire',
    genre: "Battle Royale",
    releaseDate: "December 4, 2017",
    players: "50M+",
    description: "Free Fire is a battle royale game where players fight to be the last one standing on a remote island."
}

]