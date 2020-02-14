import React from 'react'
import { mount } from 'enzyme'

const LoginPageMobileMock = (): JSX.Element => <h1>Login Page - Mobile</h1>

jest.doMock('../../hook/login/useLoginMutation', () => jest.fn())
jest.doMock('../../component/login/mobile', () => LoginPageMobileMock)

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalModule,
    useHistory: () => ({ push: jest.fn() })
  };
})

describe('Login Page', () => {
  it('should render', () => {
    const LoginPage = require('../Login').default
    const wrapper = mount(<LoginPage />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render mobile view', () => {
    const LoginPage = require('../Login').default
    const wrapper = mount(<LoginPage />)

    expect(wrapper.exists(LoginPageMobileMock)).toBeTruthy()
  })
})
