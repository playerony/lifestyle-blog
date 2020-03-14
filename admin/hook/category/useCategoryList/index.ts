import { useQuery } from '@apollo/react-hooks'

import { IResult } from './useCategoryList.type'

import { CATEGORY_LIST_QUERY } from './useCategoryList.query'

const useCategoryList = () => {
  const { data, loading } = useQuery<IResult>(CATEGORY_LIST_QUERY, {
    fetchPolicy: 'cache-first'
  })

  return { data: data?.categoryList, loading }
}

export default useCategoryList
