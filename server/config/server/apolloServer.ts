import { GraphQLSchema } from 'graphql'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'

import UserResolver from '@server/resolver/UserResolver'
import ImageResolver from '@server/resolver/ImageResolver'

const buildGraphQLSchema = async (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [UserResolver, ImageResolver],
    nullableByDefault: true
  })

export default async (): Promise<ApolloServer> => {
  const schema = await buildGraphQLSchema()

  return new ApolloServer({
    schema,
    context: ({ req }) => ({
      token: req?.headers?.authorization || ''
    })
  })
}
