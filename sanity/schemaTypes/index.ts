import { type SchemaTypeDefinition } from 'sanity'
import { player } from './player'
import { team } from './team'
import { tournament } from './tournament'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [player , team , tournament],
}
