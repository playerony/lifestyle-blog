import { useQuery } from '@apollo/react-hooks'

import { IResult } from './useLogList.type'

import { LOG_LIST_QUERY } from './useLogList.query'

const useLogList = () => {
  const { data, loading } = useQuery<IResult>(LOG_LIST_QUERY, {
    fetchPolicy: 'cache-first'
  })

  return { data: data?.logList, loading }
}

export default useLogList
