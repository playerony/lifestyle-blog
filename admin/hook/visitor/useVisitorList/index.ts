import { useQuery } from '@apollo/react-hooks'

import { IQueryResult } from './useVisitorList.type'

import { VISITOR_LIST_QUERY } from './useVisitorList.query'

const useVisitorList = () => {
  const { data, loading } = useQuery<IQueryResult>(VISITOR_LIST_QUERY, {
    fetchPolicy: 'cache-first'
  })

  return { data: data?.visitorList, loading }
}

export default useVisitorList
