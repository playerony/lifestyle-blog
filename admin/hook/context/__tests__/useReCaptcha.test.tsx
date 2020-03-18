import React from 'react'
import { mount } from 'enzyme'

import useReCaptcha from '../useReCaptcha'

describe('useReCaptcha Hook', () => {
  it('import useReCaptcha', () => {
    expect(typeof useReCaptcha).toBe('function')
  })

  it('should contain proper default data', done => {
    const Component = (): null => {
      const context = useReCaptcha()

      expect(Object.keys(context)).toHaveLength(1)
      expect(context.execute).toBeDefined()
      done()

      return null
    }

    mount(<Component />)
  })
})
