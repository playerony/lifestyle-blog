import { buildSchema } from 'type-graphql'
import { Container } from '@decorators/di'
import { ApolloServer } from 'apollo-server-express'

export default async () => {
  const schema = await buildSchema({
    resolvers: [],
    container: Container,
    nullableByDefault: true
  })

  return new ApolloServer({
    schema
  })
}
