import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

const useTitleMock = jest.fn()

jest.mock('../../../hook/article/useCreateMutation')
jest.doMock('../../../hook/utility/useTitle', () => useTitleMock)
jest.doMock(
  '../../../component/article/ArticleCreatePage',
  () => ArticleCreatePageMock
)

const setUp = (): ReactWrapper => {
  const ArticleCreate = require('../ArticleCreate').default

  return mount(<ArticleCreate />)
}

describe('ArticleCreate Page', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should set a proper document title', () => {
    setUp()

    expect(useTitleMock).toHaveBeenCalledWith('Create')
  })

  describe('ArticleCreatePage Component', () => {
    it('should render', () => {
      const wrapper = setUp()

      expect(wrapper.exists(ArticleCreatePageMock)).toBeTruthy()
    })

    it('should contain proper props', () => {
      const wrapper = setUp()

      const articleCreatePageProps: any = wrapper
        .find(ArticleCreatePageMock)
        .props()
      expect(articleCreatePageProps.onCreate).toBeDefined()
      expect(articleCreatePageProps.errorData).toEqual(ERROR_DATA)
    })
  })
})

const ArticleCreatePageMock = (): JSX.Element => <h1>Article Create Page</h1>

const ERROR_DATA: TResponseError<IArticleSave> = {
  title: [],
  imageId: [],
  content: [],
  description: [],
  categoryIdList: []
}
