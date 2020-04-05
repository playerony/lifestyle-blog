import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

import keys from '@config/keys'

Vue.use(VueApollo)

const httpLink = new HttpLink({
  uri: `${keys.serverUrl}/graphql`
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default new VueApollo({
  defaultClient: apolloClient
})
