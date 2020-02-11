import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import LoginForm from '../LoginForm'
import Input from '@component/generic/Input'
import ThemeProviderMock from '@utility/ThemeProviderMock'

import ILoginRequest from '@type/login/ILoginRequest'
import TResponseError from '@type/common/TResponseError'

const onClickMock = jest.fn()

const mountComponent = (element: React.ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('LoginForm Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<LoginForm onClick={onClickMock} errorData={ERROR_DATA_MOCK} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render svg logo', () => {
    const wrapper = mountComponent(<LoginForm onClick={onClickMock} errorData={ERROR_DATA_MOCK} />)

    expect(wrapper.find('use').props().xlinkHref).toEqual('#logo')
  })

  describe('inputs', () => {
    it('should render three inputs', () => {
      const wrapper = mountComponent(<LoginForm onClick={onClickMock} errorData={ERROR_DATA_MOCK} />)

      expect(wrapper.find(Input)).toHaveLength(3)
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

      const inputProps = wrapper.find(Input).get(1).props
      expect(inputProps.onChange).toBeDefined()
      expect(inputProps.errorMessage).toEqual('')
      expect(inputProps.name).toEqual('password')
      expect(inputProps.type).toEqual('password')
      expect(inputProps.label).toEqual('Password')
      expect(inputProps.placeholder).toEqual('What is your password?')
    })

    it('should render submit input', () => {
      const wrapper = mountComponent(<LoginForm onClick={onClickMock} errorData={ERROR_DATA_MOCK} />)

      const inputProps = wrapper.find(Input).last().props()
      expect(inputProps.disabled).toBeTruthy()
      expect(inputProps.type).toEqual('submit')
      expect(inputProps.style).toEqual({ display: 'none' })
    })
  })
})

const ERROR_DATA_MOCK: TResponseError<ILoginRequest> = {
  password: [],
  login: ['error message']
}
