import { ExecutionResult } from 'graphql'

import IArticle from '@type/article/IArticle'
import TResponseError from '@type/common/TResponseError'

export interface IResult extends Pick<ExecutionResult, 'data'> {
  errors: TResponseError<IArticle>
}
