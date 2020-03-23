import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import FabButton from '../FabButton'
import { StyledElement } from '../FabButton/FabButton.style'
import ThemeProviderMock from '@component/utility/ThemeProviderMock'

const mountComponent = (element: React.ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('FabButton Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<FabButton children={CHILDREN_PROP_MOCK} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should wrap every child element in li', () => {
    const wrapper = mountComponent(<FabButton children={CHILDREN_PROP_MOCK} />)

    expect(wrapper.find('li')).toHaveLength(2)
  })

  describe('menu trigger button', () => {
    it('should contain proper props', () => {
      const wrapper = mountComponent(<FabButton children={CHILDREN_PROP_MOCK} />)

      const listElementProps = wrapper.find('li').last().props()
      expect(listElementProps.onClick).toBeDefined()
      expect(listElementProps.style).toEqual({ pointerEvents: 'all' })
    })
  })

  describe('menu element', () => {
    it('should render rest of the list as a menu elements', () => {
      const wrapper = mountComponent(<FabButton children={CHILDREN_PROP_MOCK} />)

      expect(wrapper.find(StyledElement)).toHaveLength(1)
    })

    it('should contain proper data', () => {
      const wrapper = mountComponent(<FabButton children={CHILDREN_PROP_MOCK} />)

      const elementProps = wrapper.find(StyledElement).first().props()
      expect(elementProps.index).toEqual(1)
      expect(elementProps.isVisible).toBeFalsy()
    })
  })
})

const CHILDREN_PROP_MOCK: ReactElement[] = [
  <div />,
  <div />
]
