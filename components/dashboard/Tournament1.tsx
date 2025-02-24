import { Tournament } from "@/sanity/types";
import { Calendar, Trophy } from "lucide-react";
import Link from "next/link";
import React from "react";

type GameType = 'bgmi' | 'freefire' | 'chess';
const gameImages: Record<GameType, string> = {
  bgmi: "https://wallpaperaccess.com/full/6163542.jpg",
  freefire: "https://wallpaperaccess.com/full/1089125.jpg",
  chess: "https://wallpaperaccess.com/thumb/3289425.jpg",
};
const statusColors = {
  "registration-open": 'text-green-800 ',
  "in-progress": "text-yellow-400",
  "completed": "text-red-400",
  "registration-closed" : "text-orange-500 ",
  "upcoming" : "text-green-800 "
};

const TournamentCard = ({ tournament } : { tournament : Tournament}) => {

  return (
    <Link href={`/dashboard/tournament/${tournament._id}`} className="relative bg-white  shadow-sm  transform transition-all cursor-pointer group border-2 border-transparent hover:scale-105 hover:border-blue-500/30 overflow-hidden flex w-full gap-x-10 ">
      

      <div className="relative overflow-hidden w-[45%] bg-black/30 flex items-center justify-center  h-full">
        <img src={gameImages[tournament.game as GameType]} className="h-28 w-full object-cover opacity-10" alt="LOG" />
        <span className="text-white absolute flex items-center justify-center inset-0 font-black text-3xl uppercase tracking-wider">{tournament.game}</span>
      </div>

      
      <div className="mt-6 space-y-4">
        <h2 className="text-2xl uppercase font-bold text-center ">
          {tournament.title}
        </h2>

        

        
        <div className="flex items-center justify-center space-x-2">
          <span className={`${statusColors[tournament?.status!]} flex items-center w-full p-2 rounded-full` }>
            <span className="w-2 h-2 bg-current rounded-full animate-pulse mr-2" />
            {tournament?.status?.replace(/-/ , ' ').toLocaleUpperCase()}
          </span>
        </div>


      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-blue-600/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-600/10 blur-3xl -z-10" />
    </Link>
  );
};

export default TournamentCard;