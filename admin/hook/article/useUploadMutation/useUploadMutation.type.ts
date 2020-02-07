import { ExecutionResult } from 'graphql'

import TResponseError from '@type/common/TResponseError'

export interface IResult extends Pick<ExecutionResult, 'data'> {
  errors: TResponseError<{}>
}
