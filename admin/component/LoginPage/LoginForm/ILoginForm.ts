export interface ILoginData {
  login: string
  password: string
}

export interface IError {
  [key: string]: Array<string>
}

export default interface ILoginForm {
  errorData: IError
  onClick: (loginData: ILoginData) => void
}
