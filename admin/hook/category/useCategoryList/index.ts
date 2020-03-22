import { useQuery } from '@apollo/react-hooks'

import { IQueryResult } from './useCategoryList.type'

import { CATEGORY_LIST_QUERY } from './useCategoryList.query'

import handleApolloError from '@utility/handleApolloError'

const useCategoryList = () => {
  const { data, error, loading } = useQuery<IQueryResult>(CATEGORY_LIST_QUERY, {
    fetchPolicy: 'cache-first'
  })

  handleApolloError(error)

  return { data: data?.categoryList, loading }
}

export default useCategoryList
