import { ExecutionResult } from 'graphql'

import TResponseError from '@type/common/TResponseError'

export interface IMutationResult extends Pick<ExecutionResult, 'data'> {
  errors: TResponseError<{}>
}
