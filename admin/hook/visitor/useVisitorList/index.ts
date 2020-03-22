import { useQuery } from '@apollo/react-hooks'

import { IQueryResult } from './useVisitorList.type'

import { VISITOR_LIST_QUERY } from './useVisitorList.query'

import handleApolloError from '@utility/handleApolloError'

const useVisitorList = () => {
  const { data, error, loading } = useQuery<IQueryResult>(VISITOR_LIST_QUERY, {
    fetchPolicy: 'cache-first'
  })

  handleApolloError(error)

  return { data: data?.visitorList, loading }
}

export default useVisitorList
