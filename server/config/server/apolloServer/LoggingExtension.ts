import { GraphQLExtension, GraphQLResponse } from 'graphql-extensions'

import Logger from '@utility/Logger'

class LoggingExtension extends GraphQLExtension {
  willSendResponse({
    graphqlResponse
  }: {
    graphqlResponse: GraphQLResponse
  }): void {
    if (graphqlResponse?.errors) {
      Logger.database(graphqlResponse.errors![0].message)
    }
  }
}

export default LoggingExtension
