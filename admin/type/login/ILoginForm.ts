import ILoginRequest from '@type/login/ILoginRequest'
import TResponseError from '@type/common/TResponseError'

export default interface ILoginForm {
  errorData: TResponseError<ILoginRequest>
  onLoginDataChange: (loginData: Partial<ILoginRequest>) => void
}
