import ILoginRequest from '@type/LoginPage/ILoginRequest'
import IResponseError from '@type/common/IResponseError'

export default interface ILoginForm {
  errorData: IResponseError
  onClick: (loginData: ILoginRequest) => void
}
