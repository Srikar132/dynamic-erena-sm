import { defineField, defineType } from "sanity"
import type {Rule } from "sanity";

export const player = {
    name: 'player',
    title: 'Player',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Full Name',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().email()
      },
      {
        name: 'profile',
        title: 'Profile Image',
        type: 'url'
      },
      {
        name: 'currentTeam',
        title: 'Current Team',
        type: 'reference',
        to: {type: 'team'}
      },
      {
        name : "isAdmin",
        title : "Role",
        type : "boolean",
        validation: (Rule : Rule) => Rule.required(),
      }
    ]
  }