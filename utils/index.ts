// Tournament dummy data
// utils/index.ts


export const tournamentData  = [
    {
      _id : "1",
      _type: 'tournament',
      title: 'Free Fire Summer Championship 2025',
      game: 'free-fire',
      entryFee: 500,
      startDate: '2025-06-15T14:00:00Z',
      registrationDeadline: '2025-06-10T23:59:59Z',
      status: 'upcoming',
      registeredTeams: [{

      }], // References would be added here
      maxTeams: 16,
      prizePool: 50000
    },
    {
      _type: 'tournament',
      title: 'PUBG Mobile Pro League',
      game: 'Pubg',
      entryFee: 1000,
      startDate: '2025-03-01T16:00:00Z',
      registrationDeadline: '2025-02-25T23:59:59Z',
      status: 'registration-open',
      registeredTeams: [], // References would be added here
      maxTeams: 24,
      prizePool: 100000
    },
    {
      _type: 'tournament',
      title: 'Chess Masters Tournament',
      game: 'chess',
      entryFee: 250,
      startDate: '2025-04-10T09:00:00Z',
      registrationDeadline: '2025-04-05T23:59:59Z',
      status: 'in-progress',
      registeredTeams: [], // References would be added here
      maxTeams: 8,
      prizePool: 25000
    },
    {
      _type: 'tournament',
      title: 'Free Fire Winter Cup',
      game: 'free-fire',
      entryFee: 750,
      startDate: '2024-12-20T15:00:00Z',
      registrationDeadline: '2024-12-15T23:59:59Z',
      status: 'completed',
      registeredTeams: [], // References would be added here
      maxTeams: 32,
      prizePool: 75000
    }
  ]