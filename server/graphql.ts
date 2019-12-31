import { buildSchema } from 'type-graphql'
import { Container } from '@decorators/di'
import { ApolloServer } from 'apollo-server-express'

import Role from './database/model/Role'
import User from './database/model/User'
import UserRole from './database/model/UserRole'

export default async () => {
  await Role.sync()
  await User.sync()
  await UserRole.sync()

  const schema = await buildSchema({
    resolvers: [],
    container: Container,
    nullableByDefault: true
  })

  return new ApolloServer({
    schema
  })
}
