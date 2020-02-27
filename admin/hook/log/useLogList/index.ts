import { QueryResult } from 'react-apollo'
import { useQuery } from 'react-apollo-hooks'

import ILog from '@type/log/ILog'

import { LOG_LIST_QUERY } from './useLogList.query'

const useLogList = (): Partial<QueryResult> => {
  const { data, loading } = useQuery<{ logList: ILog[] }>(LOG_LIST_QUERY, {
    suspend: true,
    fetchPolicy: 'cache-first'
  })

  const resultData = loading ? data : data?.logList

  return { data: resultData, loading }
}

export default useLogList
