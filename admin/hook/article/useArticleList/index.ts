import { useQuery } from '@apollo/react-hooks'

import IArticle from '@type/article/IArticle'
import IVisitor from '@type/visitor/IVisitor'

import { ARTICLE_LIST_QUERY } from './useArticleList.query'

const useArticleList = () => {
  const { data, loading } = useQuery<{
    articleList: IArticle[]
    visitorList: IVisitor[]
  }>(ARTICLE_LIST_QUERY, { fetchPolicy: 'cache-first' })

  return !loading ? data : []
}

export default useArticleList
