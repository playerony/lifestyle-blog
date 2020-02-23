import { useQuery } from 'react-apollo-hooks'

import { IResult } from './useVisitorList.type'
import IVisitor from '@type/visitor/IVisitor'

import { VISITOR_LIST_QUERY } from './useVisitorList.query'

const useVisitorList = (): IVisitor[] | undefined => {
  const { data } = useQuery<IResult>(VISITOR_LIST_QUERY, {
    suspend: true,
    fetchPolicy: 'cache-first'
  })

  return data?.visitorList
}

export default useVisitorList
