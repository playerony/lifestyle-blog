import React from 'react'
import { shallow } from 'enzyme'

import ArticleEditPage from '@component/article/ArticleEditPage'

import IArticle from '@type/article/IArticle'
import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

jest.mock('../../../hook/article/useUpdateMutation')
jest.doMock('../../../hook/article/useArticle', () => () => ({ data: ARTICLE_MOCK, loading: false }))

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalModule,
    useParams: () => ({ articleId: 1 })
  }
})

describe('ArticleEdit Page', () => {
  it('should render', () => {
    const ArticleEdit = require('../ArticleEdit').default
    const wrapper = shallow(<ArticleEdit />)

    expect(wrapper.exists())
  })

  it('should render ArticleEditPage Component with proper data', () => {
    const ArticleEdit = require('../ArticleEdit').default
    const wrapper = shallow(<ArticleEdit />)

    expect(wrapper.exists(ArticleEditPage)).toBeTruthy()

    const articleEditPageProps = wrapper.find(ArticleEditPage).props()
    expect(articleEditPageProps.onEdit).toBeDefined()
    expect(articleEditPageProps.errorData).toEqual(ERROR_DATA)
    expect(articleEditPageProps.initialData).toEqual(ARTICLE_MOCK)
  })
})

const ARTICLE_MOCK: IArticle = {
  title: 'title',
  content: 'content',
  description: 'description',
  categoryList: [{
    categoryId: 1
  }],
  image: {
    imageId: 1,
    photoUrl: 'photoUrl'
  }
}

const ERROR_DATA: TResponseError<IArticleSave> = {
  title: [],
  imageId: [],
  content: [],
  description: [],
  categoryIdList: []
}
