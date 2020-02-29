import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import ImageUploader from '../ImageUploader'

import ThemeProviderMock from '@component/utility/ThemeProviderMock'

import { IImageUploaderProps } from '../ImageUploader/ImageUploader.type'

import { IMAGE_ACCEPT_TYPE } from '@config/constant'

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('ImageUploader Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<ImageUploader {...IMAGE_UPLOADER_PROPS_MOCK} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render image preview', () => {
    const wrapper = mountComponent(<ImageUploader {...IMAGE_UPLOADER_PROPS_MOCK} />)

    expect(wrapper.find('img').props().src).toEqual('url')
  })

  it('should render button for upload', () => {
    const wrapper = mountComponent(<ImageUploader {...IMAGE_UPLOADER_PROPS_MOCK} />)

    expect(wrapper.find('div').last().props().onClick).toBeDefined()
  })

  it('should render error label', () => {
    const wrapper = mountComponent(<ImageUploader {...IMAGE_UPLOADER_PROPS_MOCK} />)

    expect(wrapper.find('p').props().children).toEqual('Error message')
  })

  it('should render file input', () => {
    const wrapper = mountComponent(<ImageUploader {...IMAGE_UPLOADER_PROPS_MOCK} />)

    const inputProps = wrapper.find('input').props()
    expect(inputProps.type).toEqual('file')
    expect(inputProps.onChange).toBeDefined()
    expect(inputProps.accept).toEqual(IMAGE_ACCEPT_TYPE)
  })
})

const IMAGE_UPLOADER_PROPS_MOCK: IImageUploaderProps = {
  imageUrl: 'url',
  onUpload: jest.fn(),
  accept: IMAGE_ACCEPT_TYPE,
  errorMessage: 'Error message'
}
