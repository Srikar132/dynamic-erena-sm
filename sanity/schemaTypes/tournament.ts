import type { Rule } from "sanity"
export const tournament = {
    name: 'tournament',
    title: 'Tournament',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Tournament Title',
        type: 'string',
        validation: (Rule: Rule)=> Rule.required()
      },
      {
        name: 'game',
        title: 'Game',
        type: 'string',
        validation: (Rule :Rule)=> Rule.required(),
        options: {
          list: [
            "freefire",
            "bgmi",
            "chess"
          ]
        },
      },
      {
        name: 'entryFee',
        title: 'Entry Fee',
        type: 'number',
        validation:( Rule : Rule) => Rule.required().min(0)
      },
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'datetime',
        validation:( Rule : Rule) => Rule.required()
      },
      {
        name: 'registrationDeadline',
        title: 'Registration Deadline',
        type: 'datetime',
        validation: (Rule :Rule)=> Rule.required()
      },
      {
        name: 'status',
        title: 'Tournament Status',
        type: 'string',
        options: {
          list: [
            'upcoming',
            'registration-open',
            'registration-closed',
            'in-progress',
            'completed'
          ]
        },
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'registeredTeams',
        title: 'Registered Teams',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'team'}]}]
      },
      {
        name: 'maxTeams',
        title: 'Maximum Teams',
        type: 'number',
        validation: (Rule : Rule)=> Rule.required().min(2)
      },
      {
        name: 'prizePool',
        title: 'Prize Pool',
        type: 'number',
        validation: (Rule  : Rule) => Rule.required()
      }
    ]
  }