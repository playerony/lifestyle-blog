import { useQuery } from '@apollo/react-hooks'

import { IQueryResult } from './useLogList.type'

import { LOG_LIST_QUERY } from './useLogList.query'

const useLogList = () => {
  const { data, loading } = useQuery<IQueryResult>(LOG_LIST_QUERY, {
    fetchPolicy: 'cache-first'
  })

  return { data: data?.logList, loading }
}

export default useLogList
