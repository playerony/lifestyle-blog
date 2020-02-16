import { useQuery } from '@apollo/react-hooks'

import IArticle from '@type/article/IArticle'

import { ARTICLE_LIST_QUERY } from './useArticleList.query'

const useArticleList = () => {
  const { data, loading } = useQuery<{ articleList: IArticle }>(
    ARTICLE_LIST_QUERY,
    { fetchPolicy: 'cache-first' }
  )

  return !loading ? data : []
}

export default useArticleList
