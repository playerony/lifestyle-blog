import { ApolloError } from 'apollo-client'

import { INTERNAL_SERVER_ERROR } from '@config/constant'

export default (error: ApolloError | undefined): void => {
  if (!error) {
    return
  }

  if (error?.graphQLErrors[0]?.extensions?.code === INTERNAL_SERVER_ERROR) {
    throw new Error(error.message)
  }
}
