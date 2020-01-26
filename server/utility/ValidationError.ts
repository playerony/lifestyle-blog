import { ApolloError } from 'apollo-server-express'

class ValidationError extends ApolloError {
  constructor(object: Object) {
    super(JSON.stringify(object), 'VALIDATION_ERROR')
  }
}

export default ValidationError
