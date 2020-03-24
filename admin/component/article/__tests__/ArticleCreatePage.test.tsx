import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import ArticleForm from '../ArticleForm'
import ArticleCreatePage from '../ArticleCreatePage'
import ThemeProviderMock from '@component/utility/ThemeProviderMock'

import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

jest.mock('../../../hook/article/useUploadMutation')
jest.mock('../../../hook/category/useCategoryList', () => () => ({
  data: [],
  loading: true
}))

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalModule,
    useHistory: () => ({ push: jest.fn() })
  }
})

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

const onCreateMock = jest.fn()

describe('ArticleCreatePage Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(
      <ArticleCreatePage onCreate={onCreateMock} errorData={ERROR_DATA_MOCK} />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render header', () => {
    const wrapper = mountComponent(
      <ArticleCreatePage onCreate={onCreateMock} errorData={ERROR_DATA_MOCK} />
    )

    expect(wrapper.find('h1').props().children).toEqual('Adding a new article')
  })

  it('should render ArticleForm Component', () => {
    const wrapper = mountComponent(
      <ArticleCreatePage onCreate={onCreateMock} errorData={ERROR_DATA_MOCK} />
    )

    expect(wrapper.find(ArticleForm).props().onSave).toEqual(onCreateMock)
    expect(wrapper.find(ArticleForm).props().errorData).toEqual(ERROR_DATA_MOCK)
  })
})

const ERROR_DATA_MOCK: TResponseError<IArticleSave> = {
  title: [],
  imageId: [],
  content: [],
  description: [],
  categoryIdList: []
}
