import { useQuery } from '@apollo/react-hooks'

import { IResult } from './useArticle.type'

import { ARTICLE_QUERY } from './useArticle.query'

const useArticle = (articleId: number) => {
  const { data, loading } = useQuery<IResult>(ARTICLE_QUERY, {
    fetchPolicy: 'network-only',
    variables: { articleId }
  })

  return {
    data: data?.articleById,
    loading
  }
}

export default useArticle
