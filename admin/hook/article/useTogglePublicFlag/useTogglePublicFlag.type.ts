import { ExecutionResult } from 'graphql'

import IArticle from '@type/article/IArticle'
import TResponseError from '@type/common/TResponseError'

export interface IMutationResult extends Pick<ExecutionResult, 'data'> {
  errors: TResponseError<IArticle>
}
