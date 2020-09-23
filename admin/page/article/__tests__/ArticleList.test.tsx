import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider, wait } from '@apollo/react-testing'

import { ARTICLE_LIST_QUERY } from '@hook/article/useArticleList/useArticleList.query'
import { VISITOR_LIST_QUERY } from '@hook/visitor/useVisitorList/useVisitorList.query'

const useTitleMock = jest.fn()
const toggleLoaderMock = jest.fn()

jest.doMock('../../../hook/utility/useTitle', () => useTitleMock)
jest.doMock(
  '../../../component/article/ArticleListPage',
  () => ArticleListPageMock
)
jest.doMock('../../../hook/context/useLoader', () => () => ({
  toggleLoader: toggleLoaderMock
}))

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(
    <MemoryRouter>
      <MockedProvider mocks={ARTICLE_LIST_PAGE_MOCKS}>{element}</MockedProvider>
    </MemoryRouter>
  )

const setUp = (): ReactWrapper => {
  const ArticleList = require('../ArticleList').default

  return mountComponent(<ArticleList />)
}

describe('ArticleList Page', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should set a proper document title', () => {
    setUp()

    expect(useTitleMock).toHaveBeenLastCalledWith('Główny panel')
  })

  describe('loading data', () => {
    it('should return null during data loading', () => {
      const wrapper = setUp()

      expect(wrapper.html()).toEqual('')
    })

    it('should render ArticleListPage Component after data loading', async () => {
      const wrapper = setUp()

      await wait(0)
      wrapper.update()

      expect(wrapper.exists(ArticleListPageMock)).toBeTruthy()
    })

    it('should render LogPage Component with proper prop', async () => {
      const wrapper = setUp()

      await wait(0)
      wrapper.update()

      const articleListPageProps: any = wrapper
        .find(ArticleListPageMock)
        .props()

      expect(Object.keys(articleListPageProps)).toHaveLength(1)
      expect(articleListPageProps.articleList).toHaveLength(1)
      expect(articleListPageProps.articleList[0].todayVisitor).toEqual(0)
      expect(articleListPageProps.articleList[0].totalVisitor).toEqual(1)
    })
  })

  it('should call toggleLoader function', () => {
    setUp()

    expect(toggleLoaderMock).toHaveBeenCalledWith(true)
  })
})

const ArticleListPageMock = (): JSX.Element => <h1>Article List Page</h1>

const VISITOR_LIST_RESULT_DATA = {
  visitorList: [
    {
      articleId: 1,
      userAgent: 'userAgent',
      ipAddress: 'ipAddress',
      createdAt: new Date('2020'),
      __typename: 'Visitor'
    },
    {
      articleId: 1,
      userAgent: 'userAgent',
      ipAddress: 'ipAddress',
      createdAt: new Date('2019'),
      __typename: 'Visitor'
    }
  ]
}

const ARTICLE_LIST_RESULT_DATA = {
  articleList: [
    {
      likes: 1,
      articleId: 1,
      title: 'title',
      isPublic: true,
      description: 'description',
      createdAt: new Date('2020'),
      categoryList: [
        {
          categoryId: 1,
          name: 'name 1',
          __typename: 'Category'
        }
      ],
      image: {
        photoUrl: 'photoUrl',
        __typename: 'Image'
      },
      __typename: 'Article'
    }
  ]
}

const ARTICLE_LIST_PAGE_MOCKS = [
  {
    request: {
      query: ARTICLE_LIST_QUERY
    },
    result: { data: ARTICLE_LIST_RESULT_DATA }
  },
  {
    request: {
      query: VISITOR_LIST_QUERY
    },
    result: { data: VISITOR_LIST_RESULT_DATA }
  }
]
