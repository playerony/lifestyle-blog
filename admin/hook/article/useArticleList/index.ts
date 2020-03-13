import { useQuery } from 'react-apollo-hooks'

import { IResult } from './useArticleList.type'

import { ARTICLE_LIST_QUERY } from './useArticleList.query'

const useArticleList = () => {
  const { data, loading } = useQuery<IResult>(ARTICLE_LIST_QUERY, {
    fetchPolicy: 'network-only'
  })

  return { data: data?.articleList, loading }
}

export default useArticleList
