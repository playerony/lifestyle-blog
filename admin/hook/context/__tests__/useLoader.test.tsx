import React from 'react'
import { mount } from 'enzyme'

import useLoader from '../useLoader'

describe('useLoader Hook', () => {
  it('import useLoader', () => {
    expect(typeof useLoader).toBe('function')
  })

  it('should contain proper default data', done => {
    const Component = (): null => {
      const context = useLoader()

      expect(Object.keys(context)).toHaveLength(1)
      expect(context.toggleLoader).toBeDefined()
      done()

      return null
    }

    mount(<Component />)
  })
})
