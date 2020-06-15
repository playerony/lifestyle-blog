import { GraphQLSchema } from 'graphql'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'

import LogResolver from '@resolver/LogResolver'
import UserResolver from '@resolver/UserResolver'
import ImageResolver from '@resolver/ImageResolver'
import ArticleResolver from '@resolver/ArticleResolver'
import VisitorResolver from '@resolver/VisitorResolver'
import CommentResolver from '@resolver/CommentResolver'
import CategoryResolver from '@resolver/CategoryResolver'

import LoggingExtension from './LoggingExtension'

const buildGraphQLSchema = async (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [
      LogResolver,
      UserResolver,
      ImageResolver,
      CommentResolver,
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
      userAgent: req.headers['user-agent'],
      token: req?.headers?.authorization || '',
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    }),
    extensions: [() => new LoggingExtension()]
  })
}
