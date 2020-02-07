import { isEqual } from 'lodash'
import React, { useState, ChangeEvent, FormEvent } from 'react'

import Input from '@component/generic/Input'

import ILoginForm from '@type/login/ILoginForm'
import ILoginRequest from '@type/login/ILoginRequest'

import getFieldError from '@utility/getFieldError'

import { StyledContentWrapper, StyledForm } from './LoginForm.style'

const initialState: ILoginRequest = { login: '', password: '' }

const LoginForm = ({ errorData, onClick }: ILoginForm): JSX.Element => {
  const [loginData, setLoginData] = useState<ILoginRequest>(initialState)
  const [requestLoginData, setRequestLoginData] = useState<ILoginRequest>(initialState)

  const handleInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void =>
    setLoginData(prev => ({ ...prev, [name]: value }))

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    onClick(loginData)
    setRequestLoginData(loginData)
  }

  const isButtonDisabled = (): boolean => isEqual(loginData, requestLoginData)

  return (
    <StyledContentWrapper>
      <svg>
        <use xlinkHref="#logo" />
      </svg>
      <StyledForm onSubmit={handleFormSubmit}>
        <Input
          name="login"
          label="Login"
          onChange={handleInputChange}
          placeholder="What is your username?"
          errorMessage={getFieldError(errorData, 'login')}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          onChange={handleInputChange}
          placeholder="What is your password?"
          errorMessage={getFieldError(errorData, 'password')}
        />
        <Input
          type="submit"
          style={{ display: 'none' }}
          disabled={isButtonDisabled()}
        />
      </StyledForm>
    </StyledContentWrapper>
  )
}

export default React.memo(LoginForm)
