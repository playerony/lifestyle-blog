import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'
import ThemeProviderMock from '@component/utility/ThemeProviderMock'

import IArticleList from '@type/article/IArticleList'

jest.doMock('../ArticleList', () => ArticleListMock)
jest.mock('../../../../../hook/category/useCategoryList', () => () => ({ data: [], loading: true }))

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('Dashboard Component', () => {
  it('should render', () => {
    const Dashboard = require('../index').default
    const wrapper = mountComponent(<Dashboard articleList={ARTICLE_LIST_MOCK} />)

    expect(wrapper.exists()).toBeTruthy()
  })
})

const ArticleListMock = (): JSX.Element => <h1>Article List</h1>

const ARTICLE_LIST_MOCK: Required<IArticleList>[] = [
  {
    userId: 1,
    imageId: 1,
    articleId: 1,
    title: 'title',
    isPublic: true,
    todayVisitor: 1,
    totalVisitor: 1,
    content: 'content',
    image: {
      imageId: 1,
      photoUrl: 'photoUrl'
    },
    description: 'description',
    createdAt: new Date('2020'),
    categoryList: [{
      name: 'name',
      categoryId: 1,
      description: 'description'
    }]
  },
  {
    userId: 1,
    imageId: 1,
    articleId: 2,
    title: 'title',
    isPublic: true,
    todayVisitor: 1,
    totalVisitor: 1,
    content: 'content',
    image: {
      imageId: 1,
      photoUrl: 'photoUrl'
    },
    description: 'description',
    createdAt: new Date('2020'),
    categoryList: [{
      name: 'name',
      categoryId: 1,
      description: 'description'
    }]
  }
]
