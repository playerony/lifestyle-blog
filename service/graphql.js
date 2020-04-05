import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

Vue.use(VueApollo)

const httpLink = new HttpLink({
  uri: 'http://localhost:3100/graphql'
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default new VueApollo({
  defaultClient: apolloClient
})
