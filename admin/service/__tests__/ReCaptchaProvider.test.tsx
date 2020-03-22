import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'
import ReCAPTCHA from 'react-google-recaptcha'

jest.mock('../../hook/context/useTheme', () => jest.fn())
jest.mock('../../config/keys', () => ({
  captchaKey: 'captchaKey'
}))

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(element)

const setUp = (element: ReactElement): ReactWrapper => {
  const ReCaptchaProvider = require('../ReCaptchaProvider').default

  return mountComponent(<ReCaptchaProvider onVerify={jest.fn()}>{element}</ReCaptchaProvider>)
}

describe('ReCaptchaProvider Provider', () => {
  it('should render', () => {
    const wrapper = setUp(<div />)

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('ReCAPTCHA Component', () => {
    it('should render', () => {
      const wrapper = setUp(<div />)

      expect(wrapper.exists(ReCAPTCHA)).toBeTruthy()
    })

    it('should contain proper props', () => {
      const wrapper = setUp(<div />)

      const reCaptchaProps = wrapper.find(ReCAPTCHA).props()
      expect(reCaptchaProps.onChange).toBeDefined()
      expect(reCaptchaProps.onErrored).toBeDefined()
      expect(reCaptchaProps.onExpired).toBeDefined()
      expect(reCaptchaProps.size).toEqual('invisible')
      expect(reCaptchaProps.sitekey).toEqual('captchaKey')
    })
  })
})
