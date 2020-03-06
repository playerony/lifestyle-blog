import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import ArticleForm from '../ArticleForm'
import ArticleCreatePage from '../ArticleCreatePage'

import ThemeProviderMock from '@admin/component/utility/ThemeProviderMock'

import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

jest.mock('../../../hook/article/useUploadMutation')
jest.mock('../../../hook/category/useCategoryList', () => () => ({ data: [], loading: true }))

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

const onCreateMock = jest.fn()

describe('ArticleCreatePage Component', () => {
  it('should render', () => {
    const wrapper =
      mountComponent(
        <ArticleCreatePage
          onCreate={onCreateMock}
          errorData={ERROR_DATA}
        />
      )

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render header', () => {
    const wrapper =
      mountComponent(
        <ArticleCreatePage
          onCreate={onCreateMock}
          errorData={ERROR_DATA}
        />
      )

    expect(wrapper.find('h1').props().children).toEqual('Adding a new article')
  })

  it('should render ArticleForm Component', () => {
    const wrapper =
      mountComponent(
        <ArticleCreatePage
          onCreate={onCreateMock}
          errorData={ERROR_DATA}
        />
      )

    expect(wrapper.find(ArticleForm).props().onSave).toEqual(onCreateMock)
    expect(wrapper.find(ArticleForm).props().errorData).toEqual(ERROR_DATA)
  })
})

const ERROR_DATA: TResponseError<IArticleSave> = {
  title: [],
  imageId: [],
  content: [],
  description: [],
  categoryIdList: []
}
