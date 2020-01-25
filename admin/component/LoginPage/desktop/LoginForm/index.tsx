import React, { useState, ChangeEvent, MouseEvent } from 'react'

import Input from '@component/generic/Input'

import ILoginForm from './ILoginForm'
import ILoginRequest from '@type/LoginPage/ILoginRequest'

import getFieldError from '@utility/getFieldError'

import { StyledHeader, StyledWrapper, StyledInputWrapper, StyledButton } from './LoginForm.style'

const LoginForm = ({ errorData, onClick }: ILoginForm): JSX.Element => {
  const [loginData, setLoginData] = useState<ILoginRequest>({ login: '', password: '' })

  const onInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void =>
    setLoginData(previousLoginData => ({ ...previousLoginData, [name]: value }))

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()

    onClick(loginData)
  }

  return (
    <StyledWrapper>
      <StyledHeader>Login</StyledHeader>
      <StyledInputWrapper>
        <Input
          name="login"
          label="Login"
          onChange={onInputChange}
          placeholder="What is your username?"
          errorMessage={getFieldError(errorData, 'login')}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <Input
          name="password"
          type="password"
          label="Password"
          onChange={onInputChange}
          placeholder="What is your password?"
          errorMessage={getFieldError(errorData, 'password')}
        />
        <StyledButton onClick={handleButtonClick}>
          <svg>
            <use xlinkHref="#left-arrow-button" />
          </svg>
        </StyledButton>
      </StyledInputWrapper>
    </StyledWrapper>
  )
}

export default React.memo(LoginForm)
