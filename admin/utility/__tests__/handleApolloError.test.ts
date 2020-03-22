import { ApolloError } from 'apollo-client'
import handleApolloError from '../handleApolloError'

import { INTERNAL_SERVER_ERROR } from '@config/constant'

describe('handleApolloError Function', () => {
  it('import handleApolloError', () => {
    expect(typeof handleApolloError).toEqual('function')
  })

  it('should return void when error is not defined', () => {
    const result = handleApolloError(undefined)

    expect(result).not.toBeDefined()
  })

  it('should throw an error if error message has internal server error code', () => {
    const error = new ApolloError({
      graphQLErrors: [
        {
          path: [],
          nodes: [],
          name: 'name',
          locations: [],
          source: undefined,
          message: 'message',
          positions: undefined,
          originalError: new Error('error'),
          extensions: { code: INTERNAL_SERVER_ERROR }
        }
      ]
    })

    expect(() => {
      handleApolloError(new ApolloError(error))
    }).toThrow(new Error('GraphQL error: message'))
  })
})
