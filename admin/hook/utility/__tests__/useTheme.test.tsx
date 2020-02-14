import React from 'react'
import { mount } from 'enzyme'

import useTheme from '@hook/utility/useTheme'

import EThemeMode from '@type/common/EThemeMode'

describe('useTheme Hook', () => {
  it('should contain proper data', done => {
    const Component = (): null => {
      const context = useTheme()

      expect(Object.keys(context)).toHaveLength(2)
      expect(context.toggle).toBeDefined()
      expect(context.mode).toEqual(EThemeMode.LIGHT)
      done()

      return null
    }

    mount(<Component />)
  })
})