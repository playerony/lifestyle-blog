import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

import keys from '@config/keys'

Vue.use(VueApollo)

const httpLink = new HttpLink({
  uri: `${keys.serverUrl}/graphql`
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, path, extensions }) => {
      switch (extensions?.code) {
        case 'VALIDATION_ERROR':
          if (!path.includes('createComment')) {
            window.location.pathname = '/error/400'
          }
          break

        case 'INTERNAL_SERVER_ERROR':
          window.location.pathname = '/error/500'
          break
      }

      console.info(`[GraphQL error]: Message: ${message}, Path: ${path}`)
    })
  }

  if (networkError) console.info(`[Network error]: ${networkError}`)
})

const link = ApolloLink.from([errorLink, httpLink])

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

export default new VueApollo({
  defaultClient: apolloClient
})
