import ILoginRequest from '@type/LoginPage/ILoginRequest'
import TResponseError from '@type/common/TResponseError'

export default interface ILoginForm {
  errorData: TResponseError<ILoginRequest>
  onClick: (loginData: ILoginRequest) => void
}
