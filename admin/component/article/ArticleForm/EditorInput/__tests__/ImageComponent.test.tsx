import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import ImageComponent from '../ImageComponent'

const setUp = (text: string): ReactWrapper => {
  const block: any = {
    getText: () => text
  }

  return mount(<ImageComponent block={block} />)
}

describe('ImageComponent Component', () => {
  it('should render', () => {
    const wrapper = setUp('text')

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should contan an image with source from selected block', () => {
    const wrapper = setUp('text')

    expect(wrapper.find('img').props().src).toEqual('text')
  })
})
