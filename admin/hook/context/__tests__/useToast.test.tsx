import React from 'react'
import { mount } from 'enzyme'

import useToast from '../useToast'

describe('useToast Hook', () => {
  it('import useToast', () => {
    expect(typeof useToast).toBe('function')
  })

  it('should contain proper default data', done => {
    const Component = (): null => {
      const context = useToast()

      expect(Object.keys(context)).toHaveLength(1)
      expect(context.add).toBeDefined()
      done()

      return null
    }

    mount(<Component />)
  })
})
