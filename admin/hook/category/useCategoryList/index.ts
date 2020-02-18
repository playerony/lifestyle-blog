import { QueryResult } from 'react-apollo'
import { useQuery } from 'react-apollo-hooks'

import ICategory from '@type/category/ICategory'

import { CATEGORY_LIST_QUERY } from './useCategoryList.query'

const useCategoryList = (): Partial<QueryResult> => {
  const { data, loading } = useQuery<{ categoryList: ICategory[] }>(
    CATEGORY_LIST_QUERY,
    {
      fetchPolicy: 'cache-first'
    }
  )

  const resultData = loading ? data : data?.categoryList

  return { data: resultData, loading }
}

export default useCategoryList
