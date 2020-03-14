import { useQuery } from '@apollo/react-hooks'

import ILog from '@type/log/ILog'

import { LOG_LIST_QUERY } from './useLogList.query'

const useLogList = () => {
  const { data, loading } = useQuery<{ logList: ILog[] }>(LOG_LIST_QUERY, {
    fetchPolicy: 'cache-first'
  })

  return { data: data?.logList, loading }
}

export default useLogList
