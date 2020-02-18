import { GraphQLSchema } from 'graphql'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'

import UserResolver from '@resolver/UserResolver'
import ImageResolver from '@resolver/ImageResolver'
import ArticleResolver from '@resolver/ArticleResolver'
import VisitorResolver from '@resolver/VisitorResolver'
import CategoryResolver from '@resolver/CategoryResolver'

import LoggingExtension from './LoggingExtension'

const buildGraphQLSchema = async (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [
      UserResolver,
      ImageResolver,
      ArticleResolver,
      VisitorResolver,
      CategoryResolver
    ],
    nullableByDefault: true
  })

export default async (): Promise<ApolloServer> => {
  const schema = await buildGraphQLSchema()

  return new ApolloServer({
    schema,
    context: ({ req }) => ({
      ipAddress: req.ip,
      userAgent: req.headers['user-agent'],
      token: req?.headers?.authorization || ''
    }),
    extensions: [() => new LoggingExtension()]
  })
}
