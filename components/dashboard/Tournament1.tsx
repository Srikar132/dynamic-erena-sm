
import Link from "next/link";
import React from "react";
import Image from "next/image";
// import formatDate from "date-fns/format";
import {Calendar, DollarSign, Gamepad, Trophy, Users} from "lucide-react";
import { gameImages , statusColors  } from "@/lib/utils";
import type { GameType , Status} from "@/lib/utils";
import { Button } from "../ui/button";
import { Tournament } from "@/types/type";

const images = [
    "https://wallpaperaccess.com/full/6163542.jpg",
    "https://wallpaperaccess.com/full/1885360.jpg",
    "https://wallpaperaccess.com/thumb/3289425.jpg",
]




const TournamentCard = ({ tournament } : { tournament : Tournament}) => {
    return (
        <Link href={`/dashboard/tournament/${tournament._id}`}>
            <div className="bg-zinc-900 border border-zinc-800 hover:border-primary_green transition-all duration-300 rounded-xl overflow-hidden shadow-lg hover:shadow-green-900/30 flex flex-col h-full">
                {/* Image container with overlay gradient */}
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={gameImages[tournament.game! as GameType]}
                        width={500}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        alt={tournament.title || 'Tournament'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

 
                    {tournament.status && (
                        <div className={`absolute text-xs top-3 right-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm ${statusColors[tournament.status as Status]}`}>
                            {tournament.status.replace('-', ' ')}
                        </div>
                    )}

                    <div className="absolute bottom-3 left-3 flex items-center gap-x-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Trophy size={16} className="text-primary_green"/>
                        <span className="text-lg font-bold text-white">
              ${tournament.prizePool!}
            </span>
                    </div>
                </div>

                
                <div className="flex-1 p-4 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{tournament.title}</h3>

                    <div className="grid grid-cols-2 gap-3 mt-2">
                        <InfoCard
                            Icon={Gamepad}
                            title="Game"
                            description={tournament.game as string}
                        />
                        <InfoCard
                            Icon={DollarSign}
                            title="Entry Fee"
                            description={`${tournament.entryFee} Rs`}
                        />
                        {/* formatDate(new Date(tournament.startDate!), 'MMM d, h:mm a') */}
                        <InfoCard
                            Icon={Calendar}
                            title="Start Date"
                            description={"May 24 , 07"}
                        />
                        <InfoCard
                            Icon={Users}
                            title="Teams"
                            description={`${tournament.registeredTeams?.length || 0}`}
                        />
                    </div>
                    
                    <div className="mt-3 p-2">
                        <div className="relative flex items-center gap-x-2">
                            <ul className="relative flex tracking-tight">
                                {images.map((url , index) => (
                                    <li>
                                        <img
                                           className="rounded-full object-cover w-5 h-5"
                                            src={url}
                                            alt="url"
                                        />
                                    </li>
                                ))}
                            </ul>
                            <span className="text-sm font-semibold line-clamp-1 text-white truncate">+ {tournament.registeredTeams?.length} participents</span>
                        </div>
                    </div>

                    <div className="w-full  flex items-center justify-end">
                        <Button className="hover:underline text-black-300 hover:text-white font-semibold uppercase leading-3 tracking-wider">view</Button>
                    </div>

                </div>
            </div>
        </Link>
    );
};

const InfoCard = ({
                      Icon,
                      title,
                      description,
                  }: {
    Icon: any;
    title: string;
    description: string;
}) => (
    <div className="bg-zinc-800/50 hover:bg-zinc-800 rounded-lg p-4 flex flex-col">
        <div className="flex items-center gap-x-2 mb-1">
            <Icon size={14} className="text-primary_green" />
            <span className="text-xs font-medium text-zinc-400">{title}</span>
        </div>
        <span className="text-sm font-semibold text-white truncate">{description}</span>
    </div>
);

export default TournamentCard;