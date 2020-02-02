import { ExecutionResult } from 'graphql'

import TResponseError from '@type/common/TResponseError'
import ILoginRequest from '@type/LoginPage/ILoginRequest'

export interface IResult extends Pick<ExecutionResult, 'data'> {
  errors: TResponseError<ILoginRequest>
}
