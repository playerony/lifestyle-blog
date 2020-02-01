import { GraphQLSchema } from 'graphql'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'

import UserResolver from '@resolver/UserResolver'
import ImageResolver from '@resolver/ImageResolver'
import CategoryResolver from '@resolver/CategoryResolver'

import LoggingExtension from './LoggingExtension'

const buildGraphQLSchema = async (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [
      UserResolver,
      ImageResolver,
      CategoryResolver
    ],
    nullableByDefault: true
  })

export default async (): Promise<ApolloServer> => {
  const schema = await buildGraphQLSchema()

  return new ApolloServer({
    schema,
    context: ({ req }) => ({
      token: req?.headers?.authorization || ''
    }),
    extensions: [() => new LoggingExtension()]
  })
}
