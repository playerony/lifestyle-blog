import { useQuery } from '@apollo/react-hooks'

import { IQueryResult } from './useArticleList.type'

import { ARTICLE_LIST_QUERY } from './useArticleList.query'

import handleApolloError from '@utility/handleApolloError'

const useArticleList = () => {
  const { data, error, loading } = useQuery<IQueryResult>(ARTICLE_LIST_QUERY, {
    fetchPolicy: 'network-only'
  })

  handleApolloError(error)

  return { data: data?.articleList, loading }
}

export default useArticleList
