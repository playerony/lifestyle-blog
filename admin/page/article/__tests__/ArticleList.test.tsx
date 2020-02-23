import React from 'react'
import { shallow } from 'enzyme'

import ArticleListPage from '@component/article/ArticleListPage'

import IVisitor from '@type/visitor/IVisitor'
import IArticle from '@type/article/IArticle'

jest.doMock('../../../hook/visitor/useVisitorList', () => () => VISITOR_LIST_MOCK)
jest.doMock('../../../hook/article/useArticleList', () => () => ARTICLE_LIST_MOCK)

describe('ArticleList Page', () => {
  it('should render', () => {
    const ArticleList = require('../ArticleList').default
    const wrapper = shallow(<ArticleList />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render ArticleListPage Component', () => {
    const ArticleList = require('../ArticleList').default
    const wrapper = shallow(<ArticleList />)

    expect(wrapper.exists(ArticleListPage)).toBeTruthy()
  })

  it('should render ArticleListPage Component', () => {
    const ArticleList = require('../ArticleList').default
    const wrapper = shallow(<ArticleList />)

    const articleListProps = wrapper.find(ArticleListPage).props()

    expect(Object.keys(articleListProps)).toHaveLength(1)
    expect(articleListProps.articleList).toHaveLength(1)
    expect(articleListProps.articleList[0].todayVisitor).toEqual(0)
    expect(articleListProps.articleList[0].totalVisitor).toEqual(2)
  })
})

const ARTICLE_LIST_MOCK: IArticle[] = [
  {
    articleId: 1,
    title: 'title',
    description: 'description',
    createdAt: new Date('2020'),
    categoryList: [{
      categoryId: 1,
      name: 'name 1'
    }],
    image: {
      photoUrl: 'photoUrl'
    }
  }
]

const VISITOR_LIST_MOCK: IVisitor[] = [
  {
    articleId: 1,
    ipAddress: 'ipAddress',
    createdAt: new Date('2020')
  },
  {
    articleId: 1,
    ipAddress: 'ipAddress',
    createdAt: new Date('2019')
  }
]
