import { useQuery } from 'react-apollo-hooks'

import IArticle from '@type/article/IArticle'
import { IResult } from './useArticleList.type'

import { ARTICLE_LIST_QUERY } from './useArticleList.query'

const useArticleList = (): IArticle[] | undefined => {
  const { data } = useQuery<IResult>(ARTICLE_LIST_QUERY, {
    suspend: true,
    fetchPolicy: 'cache-first'
  })

  return data?.articleList
}

export default useArticleList
