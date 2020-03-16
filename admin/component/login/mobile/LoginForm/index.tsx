import React, { ChangeEvent } from 'react'

import Input from '@component/generic/Input'

import ILoginForm from '@type/login/ILoginForm'

import useReCaptcha from '@hook/utility/useReCaptcha'

import getFieldError from '@utility/getFieldError'

import { StyledContentWrapper, StyledForm } from './LoginForm.style'

const LoginForm = ({ errorData, onLoginDataChange }: ILoginForm): JSX.Element => {
  const { execute } = useReCaptcha()

  const handleInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void =>
    onLoginDataChange({ [name]: value })

  return (
    <StyledContentWrapper>
      <svg>
        <use xlinkHref="#logo" />
      </svg>
      <StyledForm onSubmit={event => {
        event.preventDefault()

        execute()
      }}>
        <Input
          name="login"
          label="Login"
          onChange={handleInputChange}
          placeholder="What is your login?"
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
        />
      </StyledForm>
    </StyledContentWrapper>
  )
}

export default React.memo(LoginForm)
