import UserResolver from '@resolver/UserResolver'
import ImageResolver from '@resolver/ImageResolver'
import ArticleResolver from '@resolver/ArticleResolver'
import VisitorResolver from '@resolver/VisitorResolver'
import CategoryResolver from '@resolver/CategoryResolver'

const buildSchemaMock = jest.fn()
const apolloServerMock = jest.fn()

jest.doMock('type-graphql', () => ({
  buildSchema: buildSchemaMock
}))

jest.doMock('apollo-server-express', () => {
  class ApolloServer {
    constructor(object: object) {
      apolloServerMock(object)
    }
  }

  return {
    ApolloServer
  }
})

describe('apolloServer Configuration', () => {
  it('schema shold contain proper resolvers', async () => {
    await require('..').default()

    expect(buildSchemaMock).toHaveBeenCalledWith({
      resolvers: [
        UserResolver,
        ImageResolver,
        ArticleResolver,
        VisitorResolver,
        CategoryResolver
      ],
      nullableByDefault: true
    })
  })

  it('should call ApolloServer constructor', async () => {
    await require('..').default()

    expect(apolloServerMock).toHaveBeenCalled()
  })
})
