import React, { FormEvent, ChangeEvent } from 'react'

import Input from '@component/generic/Input'

import ILoginForm from '@type/login/ILoginForm'

import useReCaptcha from '@hook/context/useReCaptcha'

import getFieldError from '@utility/getFieldError'

import { StyledContentWrapper, StyledForm } from './LoginForm.style'

const LoginForm = ({
  errorData,
  onLoginDataChange,
  preventNextRequest
}: ILoginForm): JSX.Element => {
  const { execute } = useReCaptcha()

  const handleInputChange = ({
    target: { name, value }
  }: ChangeEvent<HTMLInputElement>): void =>
    onLoginDataChange({ [name]: value })

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    execute()
  }

  return (
    <StyledContentWrapper>
      <svg>
        <use xlinkHref="#logo" />
      </svg>
      <StyledForm onSubmit={handleSubmit}>
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
          disabled={preventNextRequest}
        />
      </StyledForm>
    </StyledContentWrapper>
  )
}

export default React.memo(LoginForm)
