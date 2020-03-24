import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import ArticleForm from '..'
import UploadInput from '../UploadInput'
import EditorInput from '../EditorInput'
import Input from '@component/generic/Input'
import CategorySelect from '../CategorySelect'
import Button from '@component/generic/Button'
import BackButton from '@component/common/BackButton'

import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

const onSaveMock = jest.fn()

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalModule,
    useHistory: () => ({ push: jest.fn() })
  }
})

const setUp = (): ShallowWrapper =>
  shallow(<ArticleForm onSave={onSaveMock} errorData={ERROR_DATA} />)

describe('ArticleForm Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Input Component', () => {
    it('should render two components', () => {
      const wrapper = setUp()

      expect(wrapper.find(Input)).toHaveLength(2)
    })

    it('should render title input', () => {
      const wrapper = setUp()

      const inputProps = wrapper
        .find(Input)
        .first()
        .props()
      expect(inputProps.name).toEqual('title')
      expect(inputProps.label).toEqual('Title')
      expect(inputProps.onChange).toBeDefined()
      expect(inputProps.errorMessage).toEqual('')
    })

    it('should render title input', () => {
      const wrapper = setUp()

      const inputProps = wrapper
        .find(Input)
        .last()
        .props()
      expect(inputProps.onChange).toBeDefined()
      expect(inputProps.errorMessage).toEqual('')
      expect(inputProps.name).toEqual('description')
      expect(inputProps.label).toEqual('Description')
    })
  })

  it('should render CategorySelect Component', () => {
    const wrapper = setUp()

    const categorySelectProps = wrapper.find(CategorySelect).props()
    expect(categorySelectProps.onChange).toBeDefined()
    expect(categorySelectProps.errorMessage).toEqual('')
  })

  it('should render UploadInput Component', () => {
    const wrapper = setUp()

    const uploadInputProps = wrapper.find(UploadInput).props()
    expect(uploadInputProps.onChange).toBeDefined()
    expect(uploadInputProps.errorMessage).toEqual('')
  })

  it('should render EditorInput Component', () => {
    const wrapper = setUp()

    const editorInputProps = wrapper.find(EditorInput).props()
    expect(editorInputProps.onChange).toBeDefined()
    expect(editorInputProps.errorMessage).toEqual('')
    expect(editorInputProps.label).toEqual('Content')
  })

  it('should render Save Button', () => {
    const wrapper = setUp()

    const buttonProps = wrapper
      .find(Button)
      .last()
      .props()
    expect(buttonProps.circle).toBeTruthy()
    expect(buttonProps.onClick).toBeDefined()
    expect(buttonProps.children).toEqual('+')
    expect(buttonProps.floating).toEqual('right')
  })

  it('should render Back Button', () => {
    const wrapper = setUp()

    expect(wrapper.exists(BackButton)).toBeTruthy()
  })
})

const ERROR_DATA: TResponseError<IArticleSave> = {
  title: [],
  imageId: [],
  content: [],
  description: [],
  categoryIdList: []
}
