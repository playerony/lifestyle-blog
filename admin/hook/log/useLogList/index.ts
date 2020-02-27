import { useQuery } from 'react-apollo-hooks'

import ILog from '@type/log/ILog'

import { LOG_LIST_QUERY } from './useLogList.query'

const useLogList = (): ILog[] | undefined => {
  const { data } = useQuery<{ logList: ILog[] }>(LOG_LIST_QUERY, {
    suspend: true
  })

  return data?.logList
}

export default useLogList
