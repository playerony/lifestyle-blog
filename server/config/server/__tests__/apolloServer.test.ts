import { isEqual } from 'lodash'
import { buildSchema } from 'type-graphql'

import UserResolver from '@resolver/UserResolver'

import apolloServer from '../apolloServer'

describe('apolloServer Configuration', () => {
  it('should include proper config', async () => {
    ;(async () => {
      const schema = await buildSchema({
        resolvers: [UserResolver],
        nullableByDefault: true
      })

      const server = await apolloServer()

      expect(server.graphqlPath).toEqual('/graphql')
      expect(
        isEqual(JSON.stringify(schema), JSON.stringify((server as any).schema))
      ).toBeTruthy()
    })()
  })
})
