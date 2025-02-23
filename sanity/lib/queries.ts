import { defineQuery } from "next-sanity";

export const GET_PLAYER_BY_ID = defineQuery(`*[_type == "player" && email == $email ][0]{
    _id,
    name,
    email,
    profile,
    isAdmin,
    currentTeam->{
      _id,
      totalPoints,
      wins,
      players,
      logo,
      owner
    }
  }`);

  export const GET_TEAM_BY_ID = `
  *[_type == "team" && _id == $id][0]{
    _id,
    name,
    "logo": logo.asset->url,
    totalPoints,
    wins,
    createdAt,
    owner->{
      _id,
      name,
      email,
      "profile": profile,
      isAdmin
    },
    "players": players[]->{
      _id,
      name,
      email,
      "profile": profile,
      currentTeam->{
        _id,
        name
      }
    }
  }
`