import { mount } from 'enzyme'
import React, { useContext } from 'react'

import { ThemeContext } from '../Theme'

import EThemeMode from '@type/common/EThemeMode'

describe('Theme Context', () => {
  it('should contain proper default data', done => {
    const Component = (): null => {
      const context = useContext(ThemeContext)

      expect(Object.keys(context)).toHaveLength(2)
      expect(context.toggle).toBeDefined()
      expect(context.mode).toEqual(EThemeMode.LIGHT)
      done()

      return null
    }

    mount(<Component />)
  })
})
