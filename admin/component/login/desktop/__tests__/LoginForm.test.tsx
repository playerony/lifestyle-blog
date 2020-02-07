import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { ThemeProvider } from 'styled-components'

import LoginForm from '../LoginForm'
import Input from '@component/generic/Input'

import ILoginRequest from '@type/login/ILoginRequest'
import TResponseError from '@type/common/TResponseError'

import theme from '@style/theme'

const onClickMock = jest.fn()

const mountComponent = (element: React.ReactElement): ReactWrapper =>
  mount(<ThemeProvider theme={theme}>{element}</ThemeProvider>)

describe('LoginForm Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<LoginForm onClick={onClickMock} errorData={ERROR_DATA_MOCK} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render header', () => {
    const wrapper = mountComponent(<LoginForm onClick={onClickMock} errorData={ERROR_DATA_MOCK} />)

    expect(wrapper.find('h1').props().children).toEqual('Login')
  })

  describe('inputs', () => {
    it('should render three inputs', () => {
      const wrapper = mountComponent(<LoginForm onClick={onClickMock} errorData={ERROR_DATA_MOCK} />)

      expect(wrapper.find(Input)).toHaveLength(2)
    })

    it('should render login input', () => {
      const wrapper = mountComponent(<LoginForm onClick={onClickMock} errorData={ERROR_DATA_MOCK} />)

      const inputProps = wrapper.find(Input).first().props()
      expect(inputProps.name).toEqual('login')
      expect(inputProps.label).toEqual('Login')
      expect(inputProps.onChange).toBeDefined()
      expect(inputProps.placeholder).toEqual('What is your login?')
      expect(inputProps.errorMessage).toEqual('error message')
    })

    it('should render password input', () => {
      const wrapper = mountComponent(<LoginForm onClick={onClickMock} errorData={ERROR_DATA_MOCK} />)

      const inputProps = wrapper.find(Input).last().props()
      expect(inputProps.onChange).toBeDefined()
      expect(inputProps.errorMessage).toEqual('')
      expect(inputProps.name).toEqual('password')
      expect(inputProps.type).toEqual('password')
      expect(inputProps.label).toEqual('Password')
      expect(inputProps.placeholder).toEqual('What is your password?')
    })
  })

  it('should render button', () => {
    const wrapper = mountComponent(<LoginForm onClick={onClickMock} errorData={ERROR_DATA_MOCK} />)

    expect(wrapper.exists('button')).toBeTruthy()
  })
})

const ERROR_DATA_MOCK: TResponseError<ILoginRequest> = {
  password: [],
  login: ['error message']
}
