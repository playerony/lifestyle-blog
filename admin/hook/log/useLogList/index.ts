import { useQuery } from '@apollo/react-hooks'

import { IQueryResult } from './useLogList.type'

import { LOG_LIST_QUERY } from './useLogList.query'

import handleApolloError from '@utility/handleApolloError'

const useLogList = () => {
  const { data, error, loading } = useQuery<IQueryResult>(LOG_LIST_QUERY, {
    fetchPolicy: 'cache-first'
  })

  handleApolloError(error)

  return { data: data?.logList, loading }
}

export default useLogList
