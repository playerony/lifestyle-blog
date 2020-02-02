import ILoginRequest from '@type/LoginPage/ILoginRequest'
import TResponseError from '@type/common/TResponseError'

export interface ILoginProps {
  errorData: TResponseError<ILoginRequest>
  onClick: (loginData: ILoginRequest) => void
}
