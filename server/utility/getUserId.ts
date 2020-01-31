import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server-express'

import Context from '@type/Context'

import keys from '@config/keys'

const AUTHENTICATION_ERROR_MESSAGE = 'Authentication Error'

export default ({ token }: Context): number => {
  if (!token) {
    throw new AuthenticationError(AUTHENTICATION_ERROR_MESSAGE)
  }

  const tokenSplitResult = token.split(' ')
  if (!tokenSplitResult.length || tokenSplitResult.length !== 2) {
    throw new AuthenticationError(AUTHENTICATION_ERROR_MESSAGE)
  }

  if (tokenSplitResult[0] !== keys.jwtPrefix) {
    throw new AuthenticationError(AUTHENTICATION_ERROR_MESSAGE)
  }

  const decodedToken = jwt.verify(tokenSplitResult[1], keys.appSecret!) as { userId: number }
  if (!decodedToken || !decodedToken.userId) {
    throw new AuthenticationError(AUTHENTICATION_ERROR_MESSAGE)
  }

  return decodedToken.userId
}
