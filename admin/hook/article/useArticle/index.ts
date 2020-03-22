import { useQuery } from '@apollo/react-hooks'

import { IQueryResult } from './useArticle.type'

import { ARTICLE_QUERY } from './useArticle.query'

import handleApolloError from '@utility/handleApolloError'

const useArticle = (articleId: number) => {
  const { data, error, loading } = useQuery<IQueryResult>(ARTICLE_QUERY, {
    fetchPolicy: 'network-only',
    variables: { articleId }
  })

  handleApolloError(error)

  return {
    data: data?.articleById,
    loading
  }
}

export default useArticle
