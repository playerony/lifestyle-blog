import { useQuery } from '@apollo/react-hooks'

import { IResult } from './useAuthenticated.type'

import { IS_AUTHENTICATED_QUERY } from './useAuthenticated.query'

const useAuthenticated = () => {
  const { data, loading } = useQuery<IResult>(IS_AUTHENTICATED_QUERY, {
    fetchPolicy: 'network-only'
  })

  return { isAuthenticated: data?.isAuthenticated, loading }
}

export default useAuthenticated
