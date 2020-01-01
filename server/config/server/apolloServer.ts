import { GraphQLSchema } from 'graphql'
import { buildSchema } from 'type-graphql'
import { Container } from '@decorators/di'
import { ApolloServer } from 'apollo-server-express'

import Role from '@model/Role'
import User from '@model/User'
import UserRole from '@model/UserRole'

const synchronizeModels = async (): Promise<void> => {
  await Role.sync()
  await User.sync()
  await UserRole.sync()
}

const buildGraphQLSchema = async (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [],
    container: Container,
    nullableByDefault: true
  })

export default async () => {
  await synchronizeModels()

  const schema = await buildGraphQLSchema()

  return new ApolloServer({
    schema
  })
}
