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