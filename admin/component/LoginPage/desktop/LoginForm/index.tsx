import React, { useState, ChangeEvent } from 'react'

import Input from '@component/generic/Input'

import ILoginForm from './ILoginForm'
import ILoginRequest from '@type/ILoginRequest'

import { StyledWrapper } from './LoginForm.style'

const LoginForm = ({ errorData, onClick }: ILoginForm): JSX.Element => {
  const [loginData, setLoginData] = useState<ILoginRequest>({ login: '', password: '' })

  const onInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void =>
    setLoginData(previousLoginData => ({ ...previousLoginData, [name]: value }))

  const getFieldError = (name: string): string => {
    if (Boolean(errorData[name])) {
      return errorData[name][0]
    }

    return ''
  }

  const handleSubmit = (): void => onClick(loginData)

  return (
    <StyledWrapper>
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
      <button onClick={handleSubmit}>Login</button>
    </StyledWrapper>
  )
}

export default React.memo(LoginForm)
