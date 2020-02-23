import { ExecutionResult } from 'graphql'

import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

export interface IResult extends Pick<ExecutionResult, 'data'> {
  errors: TResponseError<IArticleSave>
}
