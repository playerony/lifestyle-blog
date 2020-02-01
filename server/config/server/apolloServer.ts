import { GraphQLSchema } from 'graphql'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'
import { GraphQLExtension, GraphQLResponse } from 'graphql-extensions'

import UserResolver from '@resolver/UserResolver'
import ImageResolver from '@resolver/ImageResolver'

import Logger from '@utility/Logger'

const buildGraphQLSchema = async (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [UserResolver, ImageResolver],
    nullableByDefault: true
  })

class BasicLogging extends GraphQLExtension {
  willSendResponse({ graphqlResponse }: { graphqlResponse: GraphQLResponse }) {
    if (Boolean(graphqlResponse?.errors)) {
      Logger.database(graphqlResponse.errors![0].message)
    }
  }
}

export default async (): Promise<ApolloServer> => {
  const schema = await buildGraphQLSchema()

  return new ApolloServer({
    schema,
    context: ({ req }) => ({
      token: req?.headers?.authorization || ''
    }),
    extensions: [() => new BasicLogging()]
  })
}
