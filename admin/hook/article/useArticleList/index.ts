import { useQuery } from 'react-apollo-hooks'

import IArticle from '@type/article/IArticle'
import IVisitor from '@type/visitor/IVisitor'

import { ARTICLE_LIST_QUERY } from './useArticleList.query'

const useArticleList = () => {
  const { data } = useQuery<{
    articleList: IArticle[]
    visitorList: IVisitor[]
  }>(ARTICLE_LIST_QUERY, { suspend: true })

  return data
}

export default useArticleList
