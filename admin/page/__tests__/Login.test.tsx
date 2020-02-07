const LoginPageMobile = (): JSX.Element => <h1>Login Page - Mobile</h1>

jest.doMock('../../hook/login/useLoginMutation', () =>
  (loginData: ILoginRequest) => ({ token: '123' }))
jest.doMock('../../component/login/mobile', () => LoginPageMobile)

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    useHistory: () => ({ push: jest.fn() })
  };
})

import React from 'react'
import { mount } from 'enzyme'

import ILoginRequest from '@type/login/ILoginRequest'

describe('Login Page', () => {
  it('should render', () => {
    const LoginPage = require('../Login').default
    const wrapper = mount(<LoginPage />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render mobile view', () => {
    const LoginPage = require('../Login').default
    const wrapper = mount(<LoginPage />)

    expect(wrapper.exists(LoginPageMobile)).toBeTruthy()
  })
})
