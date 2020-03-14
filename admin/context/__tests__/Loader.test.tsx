import { mount } from 'enzyme'
import React, { useContext } from 'react'

import { LoaderContext } from '../Loader'

describe('Loader Context', () => {
  it('should contain proper data as default', done => {
    const Component = (): null => {
      const context = useContext(LoaderContext)

      expect(Object.keys(context)).toHaveLength(1)
      expect(context.toggleLoader).toBeDefined()
      done()

      return null
    }

    mount(<Component />)
  })
})
