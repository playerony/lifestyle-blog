import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { ThemeProvider } from 'styled-components'

import LoginPageMobile from '..'
import LoginForm from '../LoginForm'

import ILoginRequest from '@type/login/ILoginRequest'
import TResponseError from '@type/common/TResponseError'

import theme from '@style/theme'

const onClickMock = jest.fn()

const mountComponent = (element: React.ReactElement): ReactWrapper =>
  mount(<ThemeProvider theme={theme}>{element}</ThemeProvider>)

describe('LoginPageMobile Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<LoginPageMobile onClick={onClickMock} errorData={ERROR_DATA_MOCK} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render LoginForm', () => {
    const wrapper = mountComponent(<LoginPageMobile onClick={onClickMock} errorData={ERROR_DATA_MOCK} />)

    expect(wrapper.find(LoginForm).props()).toEqual({ onClick: onClickMock, errorData: ERROR_DATA_MOCK })
  })
})

const ERROR_DATA_MOCK: TResponseError<ILoginRequest> = {
  password: [],
  login: ['error message']
}
