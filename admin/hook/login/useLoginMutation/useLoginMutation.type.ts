import { ExecutionResult } from 'graphql'

import ILoginRequest from '@type/login/ILoginRequest'
import TResponseError from '@type/common/TResponseError'

export interface IResult extends Pick<ExecutionResult, 'data'> {
  errors: TResponseError<ILoginRequest>
}
