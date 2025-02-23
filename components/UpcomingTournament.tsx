import React from 'react';
import { CalendarDays, Trophy, Users } from 'lucide-react';

const UpcomingTournamentCard = ({ tournament } : { tournament : any}) => {

  // Format date to readable string
  const formatDate = (dateString : string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-white/40 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-black mb-1">{tournament.title}</h3>
          <p className="text-white/60">{tournament.game}</p>
        </div>
        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-800 rounded-full text-sm">
          {tournament.status}
        </span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-black/80">
          <CalendarDays className="w-5 h-5" />
          <span>Starts {formatDate(tournament.startDate)}</span>
        </div>

        <div className="flex items-center gap-2 text-black/80">
          <Users className="w-5 h-5" />
          <span>{tournament.registeredTeams?.length || 0} / {tournament.maxTeams} Teams</span>
        </div>

        <div className="flex items-center gap-2 text-black/80">
          <Trophy className="w-5 h-5" />
          <span>Prize Pool: ${tournament.prizePool.toLocaleString()}</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center">
          <div className="text-sm text-black/60">
            Registration closes:
            <div className="text-black-300 font-medium">
              {formatDate(tournament.registrationDeadline)}
            </div>
          </div>
          <div className="text-sm text-black/60">
            Entry Fee:
            <div className="text-black font-medium">
              ${tournament.entryFee}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTournamentCard;