import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

const scrollMock = jest.fn()
const scrollToMock = jest.fn()

const mountComponent = (element: ReactElement): ReactWrapper => {
  const ScrollToTop = require('../ScrollToTop').default

  return mount(<ScrollToTop location={{} as any}>{element}</ScrollToTop>)
}

const setUp = ({ mockScroll, mockScrollTo }: { mockScroll?: boolean, mockScrollTo?: boolean }): ReactWrapper => {
  if (mockScroll) {
    window.scroll = scrollMock
  }

  if (mockScrollTo) {
    window.scrollTo = scrollToMock
  }

  return mountComponent(<ComponentMock />)
}

describe('ScrollToTop Component', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should render', () => {
    const wrapper = setUp({})

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should use scrollTo', () => {
    setUp({ mockScroll: true })

    expect(scrollMock).toHaveBeenCalledWith({ left: 0, top: 0 })
  })
})

const ComponentMock = (): JSX.Element => <h1>Component</h1>
