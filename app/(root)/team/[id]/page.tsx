import React from 'react';
import { Trophy, Users, Star, Shield } from 'lucide-react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { Player } from '@/sanity/types';
import { GET_TEAM_BY_ID } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

const TeamDetailsPage = async ({ params } : { params : {id : string}}) => {

    const {id} = params

    const team = await client.withConfig({useCdn : false}).fetch(GET_TEAM_BY_ID, {id}).catch(err => {
      console.error("Error fetching team:", err);
      return null;
  });

  if (!team) {
      console.log("No team found");
      return null;
  }

  console.log(team);

  return (
    <div className="min-h-screen mt-[5.75rem] p-6 space-y-6">
      {/* Title Section */}
      <h1 className="text-5xl font-bold text-white tracking-wider italic" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>
        TEAM DETAILS
      </h1>

      {/* Hero Section */}
      <div className="relative border-2 border-yellow-600 bg-slate-900/50 p-8 rounded-lg overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 transform rotate-45 translate-x-16 -translate-y-16" />
        
        <div className="flex items-center gap-8">
          {team.logo ? (
            <img 
              src={urlFor(team.logo).url()} 
              alt={`${team.name} logo`} 
              className="w-32 h-32 rounded border-2 border-yellow-600 object-cover"
            />
          ) : (
            <div className="w-32 h-32 rounded border-2 border-yellow-600 bg-slate-800 flex items-center justify-center">
              <Shield className="w-16 h-16 text-yellow-600" />
            </div>
          )}
          
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-white mb-4">{team.name}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 border border-yellow-600/30 rounded p-4">
                <div className="flex items-center gap-2 text-yellow-500 mb-2">
                  <Trophy className="w-5 h-5" />
                  <span className="font-semibold">Total Wins</span>
                </div>
                <div className="text-3xl font-bold text-white">{team.wins}</div>
              </div>
              <div className="bg-slate-800 border border-yellow-600/30 rounded p-4">
                <div className="flex items-center gap-2 text-yellow-500 mb-2">
                  <Star className="w-5 h-5" />
                  <span className="font-semibold">Total Points</span>
                </div>
                <div className="text-3xl font-bold text-white">{team.totalPoints}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Owner Section */}
      <div className="border-2 border-yellow-600 bg-slate-900/50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Shield className="w-6 h-6 text-yellow-500" />
          TEAM OWNER
        </h3>
        <div className="bg-slate-800 border border-yellow-600/30 rounded-lg p-4 flex items-center gap-4">
          {team.owner?.profile ? (
            <img 
              src={team.owner.profile} 
              alt={team.owner.profile} 
              className="w-16 h-16 rounded border border-yellow-600"
            />
          ) : (
            <div className="w-16 h-16 rounded border border-yellow-600 bg-slate-700 flex items-center justify-center">
              <Users className="w-8 h-8 text-yellow-500" />
            </div>
          )}
          <div>
            <div className="text-xl font-bold text-white">{team.owner?.name || 'Team Owner'}</div>
            <div className="text-yellow-500">Squad Leader</div>
          </div>
        </div>
      </div>

      {/* Players Section */}
      <div className="border-2 border-yellow-600 bg-slate-900/50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Users className="w-6 h-6 text-yellow-500" />
          SQUAD MEMBERS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.players?.map((player : Player, index : number) => (
            <div 
              key={player.name}
              className="bg-slate-800 border border-yellow-600/30 rounded-lg p-4 flex items-center gap-4"
            >
              {player?.profile ? (
                <img 
                  src={player?.profile} 
                  alt={player.name} 
                  className="w-12 h-12 rounded border border-yellow-600"
                />
              ) : (
                <div className="w-12 h-12 rounded border border-yellow-600 bg-slate-700 flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-500" />
                </div>
              )}
              <div>
                <div className="text-white font-bold">{player.name || `Player ${index + 1}`}</div>
                <div className="text-yellow-500 text-sm">Squad Member</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsPage;