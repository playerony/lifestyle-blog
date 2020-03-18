import { useQuery } from '@apollo/react-hooks'

import { IQueryResult } from './useCategoryList.type'

import { CATEGORY_LIST_QUERY } from './useCategoryList.query'

const useCategoryList = () => {
  const { data, loading } = useQuery<IQueryResult>(CATEGORY_LIST_QUERY, {
    fetchPolicy: 'cache-first'
  })

  return { data: data?.categoryList, loading }
}

export default useCategoryList
