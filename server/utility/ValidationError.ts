import { ApolloError } from 'apollo-server-express'

import { VALIDATION_ERROR } from '@config/constant'

class ValidationError extends ApolloError {
  constructor(object: Object) {
    super(JSON.stringify(object), VALIDATION_ERROR)
  }
}

export default ValidationError
