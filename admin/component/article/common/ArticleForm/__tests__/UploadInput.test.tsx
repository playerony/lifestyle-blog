import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { ThemeProvider } from 'styled-components'

import UploadInput from '../UploadInput'
import ImageUploader from '@component/common/ImageUploader'

import theme from '@style/theme'

jest.mock('../../../../../hook/article/useUploadMutation')

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProvider theme={theme}>{element}</ThemeProvider>)

describe('UploadInput Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<UploadInput onChange={jest.fn()} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render ImageUploader Component', () => {
    const wrapper = mountComponent(<UploadInput onChange={jest.fn()} />)

    expect(wrapper.exists(ImageUploader)).toBeTruthy()

    const imageUploaderProps = wrapper.find(ImageUploader).props()
    expect(imageUploaderProps.onUpload).toBeDefined()
    expect(imageUploaderProps.imageUrl).not.toBeDefined()
    expect(imageUploaderProps.accept).toEqual('image/jpeg')
    expect(imageUploaderProps.errorMessage).toBeUndefined()
  })
})
