import { mount } from 'enzyme'
import React, { useContext } from 'react'

import { ToastContext } from '../Toast'

describe('Toast Context', () => {
  it('should contain proper data as default', done => {
    const Component = (): null => {
      const context = useContext(ToastContext)

      expect(Object.keys(context)).toHaveLength(1)
      expect(context.add).toBeDefined()
      done()

      return null
    }

    mount(<Component />)
  })
})
