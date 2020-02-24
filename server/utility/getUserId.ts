import jwt from 'jsonwebtoken'
import { ForbiddenError } from 'apollo-server-express'

import Context from '@type/Context'

import keys from '@config/keys'

const FORBIDDEN_ERROR_MESSAGE = 'Forbidden Error.'

export default ({ token }: Context): number => {
  if (!token) {
    throw new ForbiddenError(FORBIDDEN_ERROR_MESSAGE)
  }

  const tokenSplitResult = token.split(' ')
  if (!tokenSplitResult.length || tokenSplitResult.length !== 2) {
    throw new ForbiddenError(FORBIDDEN_ERROR_MESSAGE)
  }

  if (tokenSplitResult[0] !== keys.jwtPrefix) {
    throw new ForbiddenError(FORBIDDEN_ERROR_MESSAGE)
  }

  const decodedToken = jwt.verify(tokenSplitResult[1], keys.appSecret!) as {
    userId: number
  }

  if (!decodedToken?.userId) {
    throw new ForbiddenError(FORBIDDEN_ERROR_MESSAGE)
  }

  return decodedToken.userId
}
