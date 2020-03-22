import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import LoginPageMobile from '..'
import LoginForm from '../LoginForm'

import ThemeProviderMock from '@admin/component/utility/ThemeProviderMock'

import ILoginRequest from '@type/login/ILoginRequest'
import TResponseError from '@type/common/TResponseError'

const mountComponent = (element: React.ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('LoginPageMobile Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<LoginPageMobile {...LOGIN_PAGE_PROPS_MOCK} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render LoginForm', () => {
    const wrapper = mountComponent(<LoginPageMobile {...LOGIN_PAGE_PROPS_MOCK} />)

    expect(wrapper.find(LoginForm).props())
      .toEqual({ onLoginDataChange: jasmine.any(Function), errorData: ERROR_DATA_MOCK, preventNextRequest: true })
  })
})

const ERROR_DATA_MOCK: TResponseError<ILoginRequest> = {
  password: [],
  login: ['error message']
}

const LOGIN_PAGE_PROPS_MOCK = {
  preventNextRequest: true,
  errorData: ERROR_DATA_MOCK,
  onLoginDataChange: jest.fn()
}
