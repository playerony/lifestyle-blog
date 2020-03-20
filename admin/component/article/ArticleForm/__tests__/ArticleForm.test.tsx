import React from 'react'
import { shallow } from 'enzyme'

import ArticleForm from '..'
import UploadInput from '../UploadInput'
import EditorInput from '../EditorInput'
import Input from '@component/generic/Input'
import CategorySelect from '../CategorySelect'
import Button from '@component/generic/Button'

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

describe('ArticleForm Component', () => {
  it('should render', () => {
    const wrapper = shallow(<ArticleForm onSave={onSaveMock} errorData={ERROR_DATA} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Input Component', () => {
    it('should render two components', () => {
      const wrapper = shallow(<ArticleForm onSave={onSaveMock} errorData={ERROR_DATA} />)

      expect(wrapper.find(Input)).toHaveLength(2)
    })

    it('should render title input', () => {
      const wrapper = shallow(<ArticleForm onSave={onSaveMock} errorData={ERROR_DATA} />)

      const inputProps = wrapper.find(Input).first().props()
      expect(inputProps.name).toEqual('title')
      expect(inputProps.label).toEqual('Title')
      expect(inputProps.onChange).toBeDefined()
      expect(inputProps.errorMessage).toEqual('')
    })

    it('should render title input', () => {
      const wrapper = shallow(<ArticleForm onSave={onSaveMock} errorData={ERROR_DATA} />)

      const inputProps = wrapper.find(Input).last().props()
      expect(inputProps.onChange).toBeDefined()
      expect(inputProps.errorMessage).toEqual('')
      expect(inputProps.name).toEqual('description')
      expect(inputProps.label).toEqual('Description')
    })
  })

  it('should render CategorySelect Component', () => {
    const wrapper = shallow(<ArticleForm onSave={onSaveMock} errorData={ERROR_DATA} />)

    const categorySelectProps = wrapper.find(CategorySelect).props()
    expect(categorySelectProps.onChange).toBeDefined()
    expect(categorySelectProps.errorMessage).toEqual('')
  })

  it('should render UploadInput Component', () => {
    const wrapper = shallow(<ArticleForm onSave={onSaveMock} errorData={ERROR_DATA} />)

    const uploadInputProps = wrapper.find(UploadInput).props()
    expect(uploadInputProps.onChange).toBeDefined()
    expect(uploadInputProps.errorMessage).toEqual('')
  })

  it('should render EditorInput Component', () => {
    const wrapper = shallow(<ArticleForm onSave={onSaveMock} errorData={ERROR_DATA} />)

    const editorInputProps = wrapper.find(EditorInput).props()
    expect(editorInputProps.onChange).toBeDefined()
    expect(editorInputProps.errorMessage).toEqual('')
    expect(editorInputProps.label).toEqual('Content')
  })

  it('should render Save Button', () => {
    const wrapper = shallow(<ArticleForm onSave={onSaveMock} errorData={ERROR_DATA} />)

    const buttonProps = wrapper.find(Button).last().props()
    expect(buttonProps.circle).toBeTruthy()
    expect(buttonProps.onClick).toBeDefined()
    expect(buttonProps.children).toEqual('+')
    expect(buttonProps.floating).toEqual('right')
  })

  it('should render Back Button', () => {
    const wrapper = shallow(<ArticleForm onSave={onSaveMock} errorData={ERROR_DATA} />)

    const buttonProps = wrapper.find(Button).first().props()
    expect(buttonProps.circle).toBeTruthy()
    expect(buttonProps.onClick).toBeDefined()
    expect(buttonProps.floating).toEqual('left')
    expect(wrapper.find(Button).find('use').props().xlinkHref).toEqual('#left-arrow')
  })
})

const ERROR_DATA: TResponseError<IArticleSave> = {
  title: [],
  imageId: [],
  content: [],
  description: [],
  categoryIdList: []
}
