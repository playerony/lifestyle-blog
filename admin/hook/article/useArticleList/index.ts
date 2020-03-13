import { useQuery } from 'react-apollo-hooks'

import IArticle from '@type/article/IArticle'
import { IResult } from './useArticleList.type'

import useLoading from '@hook/utility/useLoading'

import { ARTICLE_LIST_QUERY } from './useArticleList.query'

const useArticleList = (): IArticle[] | undefined => {
  const { toggleLoader } = useLoading()

  const { data, loading } = useQuery<IResult>(ARTICLE_LIST_QUERY, {
    fetchPolicy: 'network-only'
  })

  toggleLoader(loading)

  return data?.articleList
}

export default useArticleList
