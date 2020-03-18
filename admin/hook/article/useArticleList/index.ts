import { useQuery } from '@apollo/react-hooks'

import { IQueryResult } from './useArticleList.type'

import { ARTICLE_LIST_QUERY } from './useArticleList.query'

const useArticleList = () => {
  const { data, loading } = useQuery<IQueryResult>(ARTICLE_LIST_QUERY, {
    fetchPolicy: 'network-only'
  })

  return { data: data?.articleList, loading }
}

export default useArticleList
