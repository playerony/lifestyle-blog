import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { ThemeProvider } from 'styled-components'

import Input from '../Input'

import theme from '@style/theme'

const mountComponent = (element: React.ReactElement): ReactWrapper =>
  mount(<ThemeProvider theme={theme}>{element}</ThemeProvider>)

describe('Input Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<Input />)

    expect(wrapper).toBeDefined()
  })

  describe('label element', () => {
    it('should not render', () => {
      const wrapper = mountComponent(<Input />)

      expect(wrapper.find('label').length).toEqual(0)
    })

    it('should render', () => {
      const label = 'Label text'
      const wrapper = mountComponent(<Input label={label} />)

      expect(wrapper.find('label').props()).toBeDefined()
      expect(wrapper.find('label').props().children).toEqual('Label text')
    })
  })

  describe('p element', () => {
    it('should render at default', () => {
      const wrapper = mountComponent(<Input />)

      expect(wrapper.find('p').props()).toBeDefined()
      expect(wrapper.find('p').props().children).toEqual(undefined)
    })

    it('should render with content', () => {
      const errorMessage = 'Error text'
      const wrapper = mountComponent(<Input errorMessage={errorMessage} />)

      expect(wrapper.find('p').props()).toBeDefined()
      expect(wrapper.find('p').props().children).toEqual(errorMessage)
    })
  })

  describe('input element', () => {
    it('should render with default props', () => {
      const wrapper = mountComponent(<Input />)

      expect(wrapper.find('input').props()).toBeDefined()
      expect(wrapper.find('input').props().type).toEqual('text')
      expect(wrapper.find('input').props().onBlur).toBeDefined()
      expect(wrapper.find('input').props().onFocus).toBeDefined()
    })

    it('should pass input props', () => {
      const placeholder = 'placeholder'
      const onClick = jest.fn()

      const wrapper = mountComponent(
        <Input placeholder={placeholder} onClick={onClick} />
      )

      expect(wrapper.find('input').props()).toBeDefined()
      expect(wrapper.find('input').props().placeholder).toEqual(placeholder)
      expect(wrapper.find('input').props().onClick).toBeDefined()
    })

    it('should call an event', () => {
      const onClick = jest.fn()
      const onFocus = jest.fn()

      const wrapper = mountComponent(
        <Input onClick={onClick} onFocus={onFocus} />
      )

      wrapper.find('input').simulate('click')
      expect(onClick).toHaveBeenCalled()

      wrapper.find('input').simulate('focus')
      expect(onFocus).toHaveBeenCalled()
    })
  })
})
