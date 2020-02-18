import { useQuery } from 'react-apollo-hooks'

import { IResult } from './useArticleList.type'

import { ARTICLE_LIST_QUERY } from './useArticleList.query'

const useArticleList = (): IResult | null => {
  const { data } = useQuery<IResult>(ARTICLE_LIST_QUERY, { suspend: true })

  return data || null
}

export default useArticleList
