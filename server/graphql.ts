import { buildSchema } from 'type-graphql'
import { Container } from '@decorators/di'
import { ApolloServer } from 'apollo-server-express'

import Role from './database/model/Role'

export default async () => {
  await Role.sync()

  const schema = await buildSchema({
    resolvers: [],
    container: Container,
    nullableByDefault: true
  })

  return new ApolloServer({
    schema
  })
}
