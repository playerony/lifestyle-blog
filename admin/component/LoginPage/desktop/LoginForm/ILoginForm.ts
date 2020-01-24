import ILoginRequest from '@type/ILoginRequest'
import IResponseError from '@type/IResponseError'

export default interface ILoginForm {
  errorData: IResponseError
  onClick: (loginData: ILoginRequest) => void
}
