import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import ReCaptchaProvider from '@service/ReCaptchaProvider'

jest.doMock('../../hook/login/useLoginMutation', () => jest.fn())
jest.doMock('../../component/login/mobile', () => LoginPageMobileMock)
jest.mock('../../config/keys', () => ({
  captchaKey: 'captchaKey'
}))

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalModule,
    useHistory: () => ({ push: jest.fn() })
  }
})

const setUp = (): ReactWrapper => {
  const LoginPage = require('../Login').default

  return mount(<LoginPage />)
}

describe('Login Page', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Login Component', () => {
    it('should render', () => {
      const wrapper = setUp()

      expect(wrapper.exists(LoginPageMobileMock)).toBeTruthy()
    })

    it('should contain proper props', () => {
      const wrapper = setUp()

      const LoginPageProps: any = wrapper.find(LoginPageMobileMock).props()
      expect(LoginPageProps.errorData).toEqual({
        login: [],
        password: []
      })
      expect(LoginPageProps.preventNextRequest).toBeTruthy()
      expect(LoginPageProps.onLoginDataChange).toBeDefined()
    })
  })

  describe('ReCaptchaProvider Provider', () => {
    it('should render', () => {
      const wrapper = setUp()

      expect(wrapper.exists(ReCaptchaProvider)).toBeTruthy()
    })

    it('should contain proper props', () => {
      const wrapper = setUp()

      expect(wrapper.find(ReCaptchaProvider).props().onVerify).toBeDefined()
      expect(wrapper.find(ReCaptchaProvider).props().children).toBeDefined()
    })
  })
})

const LoginPageMobileMock = (): JSX.Element => <h1>Login Page - Mobile</h1>
