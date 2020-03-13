import { useQuery } from 'react-apollo-hooks'

import { IResult } from './useArticle.type'
import IArticle from '@type/article/IArticle'

import { ARTICLE_QUERY } from './useArticle.query'

const useArticle = (articleId: number): IArticle | undefined => {
  const { data } = useQuery<IResult>(ARTICLE_QUERY, {
    suspend: true,
    fetchPolicy: 'network-only',
    variables: { articleId }
  })

  return data?.articleById
}

export default useArticle
