import React from 'react'
import { shallow } from 'enzyme'

import ArticleCreate from '../ArticleCreate'
import ArticleCreatePage from '@component/article/ArticleCreatePage'

import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

jest.mock('../../../hook/article/useCreateMutation')

describe('ArticleCreate Page', () => {
  it('should render', () => {
    const wrapper = shallow(<ArticleCreate />)

    expect(wrapper.exists())
  })

  it('should render ArticleCreatePage Component with proper data', () => {
    const wrapper = shallow(<ArticleCreate />)

    expect(wrapper.exists(ArticleCreatePage)).toBeTruthy()

    const articleCreatePageProps = wrapper.find(ArticleCreatePage).props()
    expect(articleCreatePageProps.onCreate).toBeDefined()
    expect(articleCreatePageProps.errorData).toEqual(ERROR_DATA)
  })
})

const ERROR_DATA: TResponseError<IArticleSave> = {
  title: [],
  imageId: [],
  content: [],
  description: [],
  categoryIdList: []
}
