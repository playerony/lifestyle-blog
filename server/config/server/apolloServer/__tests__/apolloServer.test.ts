import LogResolver from '@resolver/LogResolver'
import UserResolver from '@resolver/UserResolver'
import ImageResolver from '@resolver/ImageResolver'
import CommentResolver from '@resolver/CommentResolver'
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
  it('should import', async () => {
    const setupApolloServer = await require('..').default

    expect(typeof setupApolloServer).toEqual('function')
  })

  it('schema shold contain proper resolvers', async () => {
    await require('..').default()

    expect(buildSchemaMock).toHaveBeenCalledWith({
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
  })

  it('should call ApolloServer constructor', async () => {
    await require('..').default()

    expect(apolloServerMock).toHaveBeenCalled()
  })
})
