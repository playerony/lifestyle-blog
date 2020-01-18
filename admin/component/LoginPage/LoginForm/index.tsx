import React, { useState, ChangeEvent } from 'react'

import Input from '@component/generic/Input'
import ContentWrapper from '../ContentWrapper'

import ILoginForm, { ILoginData } from './ILoginForm'

const LoginForm = ({ errorData, onClick }: ILoginForm): JSX.Element => {
  const [loginData, setLoginData] = useState<ILoginData>({ login: '', password: '' })

  const onInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void =>
    setLoginData(previousLoginData => ({ ...previousLoginData, [name]: value }))

  const getFieldError = (name: string): string => {
    if (Boolean(errorData[name])) {
      return errorData[name][0]
    }

    return ''
  }

  return (
    < ContentWrapper >
      <h1>Login</h1>
      <Input label="Login" errorMessage={getFieldError('login')} name="login" onChange={onInputChange} placeholder="What is your username?" />
      <Input
        type="password"
        label="Password"
        errorMessage={getFieldError('password')}
        name="password"
        onChange={onInputChange}
        placeholder="What is your password?"
      />
      <button onClick={() => onClick(loginData)}>Login</button>
    </ContentWrapper >
  )
}

export default React.memo(LoginForm)
