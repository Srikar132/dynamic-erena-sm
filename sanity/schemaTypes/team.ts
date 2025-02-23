import type {Rule } from "sanity";

export const team = {
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Team Name',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'logo',
        title: 'Team Logo',
        type: 'image'
      },
      {
        name: 'owner',
        title: 'Team Owner',
        type: 'reference',
        to: [{type: 'player'}],
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'players',
        title: 'Team Players',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'player'}]}],
        validation: (Rule: Rule) => Rule.required().min(1)
      },
      {
        name: 'totalPoints',
        title: 'Total Points',
        type: 'number',
        initialValue: 0
      },
      {
        name: 'wins',
        title: 'Total Wins',
        type: 'number',
        initialValue: 0
      }
    ]
  }