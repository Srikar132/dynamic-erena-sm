

export const navigation = [
    {
        id : "2",
        title : "Events",
        url : "/events"
    },
    {
        id : "1",
        title : "Anouncements",
        url : "/anouncements"
    },
    {
        id : "1",
        title : "Leader Board",
        url : "/leaderboard"
    },
    {
        id : "3" ,
        title : "About",
        url : "/about"
    },
    {
        id : "4",
        title : "Join",
        url : "/join",
        isMobile : true
    }
  ];

// Player Documents
export const playerDummyData  = [
    {
        _id: 'player_001',
        _type: 'player',
        name: 'Alex Rodriguez',
        email: 'alex.rodriguez@example.com',
        profile: 'https://example.com/avatars/alex.jpg',
        currentTeam: {
            _type: 'reference',
            _ref: 'team_phoenix'
        },
        isAdmin: false,
        _createdAt: "",
        _updatedAt: "",
        _rev: ""
    },
    {
        _id: 'player_002',
        _type: 'player',
        name: 'Emma Chen',
        email: 'emma.chen@example.com',
        profile: 'https://example.com/avatars/emma.jpg',
        currentTeam: {
            _type: 'reference',
            _ref: 'team_phoenix'
        },
        isAdmin: false,
        _createdAt: "",
        _updatedAt: "",
        _rev: ""
    },
    {
        _id: 'player_003',
        _type: 'player',
        name: 'David Kim',
        email: 'david.kim@example.com',
        profile: 'https://example.com/avatars/david.jpg',
        currentTeam: {
            _type: 'reference',
            _ref: 'team_phoenix'
        },
        isAdmin: false,
        _createdAt: "",
        _updatedAt: "",
        _rev: ""
    },
    {
        _id: 'player_004',
        _type: 'player',
        name: 'Sarah Johnson',
        email: 'sarah.johnson@example.com',
        profile: 'https://example.com/avatars/sarah.jpg',
        currentTeam: {
            _type: 'reference',
            _ref: 'team_phoenix'
        },
        isAdmin: true,
        _createdAt: "",
        _updatedAt: "",
        _rev: ""
    },
    {
        _id: 'player_005',
        _type: 'player',
        name: 'Michael Wong',
        email: 'michael.wong@example.com',
        profile: 'https://example.com/avatars/michael.jpg',
        currentTeam: {
            _type: 'reference',
            _ref: 'team_thunder'
        },
        isAdmin: false,
        _createdAt: "",
        _updatedAt: "",
        _rev: ""
    }
];

// Team Documents
export const teamDummyData  = [
    {
        _id: 'team_phoenix',
        _type: 'team',
        name: 'Phoenix Flames',
        logo: {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: 'image_phoenix_logo'
            }
        },
        owner: {
            _type: 'reference',
            _ref: 'player_004'
        },
        players: [
            {
                _type: 'reference',
                _ref: 'player_001',
                _key: ""
            },
            {
                _type: 'reference',
                _ref: 'player_002',
                _key: ""
            },
            {
                _type: 'reference',
                _ref: 'player_003',
                _key: ""
            },
            {
                _type: 'reference',
                _ref: 'player_004',
                _key: ""
            }
        ],
        totalPoints: 250,
        wins: 3,
        _createdAt: "",
        _updatedAt: "",
        _rev: ""
    },
    {
        _id: 'team_thunder',
        _type: 'team',
        name: 'Thunder Strikers',
        logo: {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: 'image_thunder_logo'
            }
        },
        owner: {
            _type: 'reference',
            _ref: 'player_005'
        },
        players: [
            {
                _type: 'reference',
                _ref: 'player_005',
                _key: ""
            }
        ],
        totalPoints: 150,
        wins: 1,
        _createdAt: "",
        _updatedAt: "",
        _rev: ""
    }
];

// Tournament Document
export const tournamentDummyData = [{
    _id: 'tournament_summer_2024',
    _type: 'tournament',
    title: 'Summer Gaming Championship 2024',
    game: 'freefire',
    entryFee: 500,
    startDate: '2024-07-15T09:00:00Z',
    registrationDeadline: '2024-06-30T23:59:59Z',
    status: 'registration-open',
    registeredTeams: [
        {
            _type: 'reference',
            _ref: 'team_phoenix',
            _key: 'team_phoenix_ref'
        },
        {
            _type: 'reference',
            _ref: 'team_thunder',
            _key: 'team_thunder_ref'
        }
    ],
    maxTeams: 16,
    prizePool: 50000,
    _createdAt: "",
    _updatedAt: "",
    _rev: ""
},{
    _id: 'tournament_summer_2024',
    _type: 'tournament',
    title: 'Pubg Winter tournaments 2025',
    game: 'bgmi',
    entryFee: 1000,
    startDate: '2024-07-15T09:00:00Z',
    registrationDeadline: '2024-06-30T23:59:59Z',
    status: 'registration-open',
    registeredTeams: [
        {
            _type: 'reference',
            _ref: 'team_phoenix',
            _key: 'team_phoenix_ref'
        },
        {
            _type: 'reference',
            _ref: 'team_thunder',
            _key: 'team_thunder_ref'
        },
        {
            _type: 'reference',
            _ref: 'team_thunder',
            _key: 'team_thunder_ref'
        }
    ],
    maxTeams: 16,
    prizePool: 40000,
    _createdAt: "",
    _updatedAt: "",
    _rev: ""
}

];

// Additional context for image assets (simplified)
