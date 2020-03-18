import { mount } from 'enzyme'
import React, { useContext } from 'react'

import { ReCaptchaContext } from '../ReCaptcha'

describe('ReCaptcha Context', () => {
  it('should contain proper default data', done => {
    const Component = (): null => {
      const context = useContext(ReCaptchaContext)

      expect(Object.keys(context)).toHaveLength(1)
      expect(context.execute).toBeDefined()
      done()

      return null
    }

    mount(<Component />)
  })
})
