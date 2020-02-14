import { mount } from 'enzyme'
import React, { useContext } from 'react'

import { ManageThemeContext } from '../ManageTheme'

import EThemeMode from '@type/common/EThemeMode'

describe('ManageTheme Context', () => {
  it('should contain proper data', done => {
    const Component = (): null => {
      const context = useContext(ManageThemeContext)

      expect(Object.keys(context)).toHaveLength(2)
      expect(context.toggle).toBeDefined()
      expect(context.mode).toEqual(EThemeMode.LIGHT)
      done()

      return null
    }

    mount(<Component />)
  })
})
