import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import IArticleList from '@type/article/IArticleList'

import ThemeProviderMock from '@component/utility/ThemeProviderMock'

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalModule,
    useHistory: () => ({ push: jest.fn() })
  }
})

jest.doMock('../../../../../hook/article/useTogglePublicFlag', () => () =>
  ARTICLE_MOCK
)

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('ArticleCard Component', () => {
  it('should render', () => {
    const ArticleCard = require('../ArticleCard').default
    const wrapper = mountComponent(<ArticleCard article={ARTICLE_MOCK} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render image attached to the article', () => {
    const ArticleCard = require('../ArticleCard').default
    const wrapper = mountComponent(<ArticleCard article={ARTICLE_MOCK} />)

    expect(wrapper.exists('img')).toBeTruthy()
    expect(wrapper.find('img').props().src).toEqual('photoUrl')
  })

  describe('main content', () => {
    it('should render', () => {
      const ArticleCard = require('../ArticleCard').default
      const wrapper = mountComponent(<ArticleCard article={ARTICLE_MOCK} />)

      expect(wrapper.exists('section')).toBeTruthy()
    })

    describe('header', () => {
      it('should render', () => {
        const ArticleCard = require('../ArticleCard').default
        const wrapper = mountComponent(<ArticleCard article={ARTICLE_MOCK} />)

        expect(wrapper.exists('header')).toBeTruthy()
        expect(wrapper.find('header').find('p')).toHaveLength(4)
      })

      it('should render number of the article', () => {
        const ArticleCard = require('../ArticleCard').default
        const wrapper = mountComponent(<ArticleCard article={ARTICLE_MOCK} />)

        expect(
          wrapper
            .find('header')
            .find('p')
            .first()
            .props().children
        ).toEqual('001')
      })

      it('should render eye icon', () => {
        const ArticleCard = require('../ArticleCard').default
        const wrapper = mountComponent(<ArticleCard article={ARTICLE_MOCK} />)

        expect(
          wrapper
            .find('header')
            .find('use')
            .props().xlinkHref
        ).toEqual('#eye')
      })

      it('should render number of total article visitors', () => {
        const ArticleCard = require('../ArticleCard').default
        const wrapper = mountComponent(<ArticleCard article={ARTICLE_MOCK} />)

        expect(
          wrapper
            .find('header')
            .find('p')
            .get(1).props.children
        ).toEqual(1)
      })

      it('should render number of today article visitors', () => {
        const ArticleCard = require('../ArticleCard').default
        const wrapper = mountComponent(<ArticleCard article={ARTICLE_MOCK} />)

        expect(
          wrapper
            .find('header')
            .find('p')
            .get(2).props.children
        ).toEqual('(+1)')
      })

      it('should render date of article creation', () => {
        const ArticleCard = require('../ArticleCard').default
        const wrapper = mountComponent(<ArticleCard article={ARTICLE_MOCK} />)

        expect(
          wrapper
            .find('header')
            .find('p')
            .get(3).props.children
        ).toEqual('01.01.2020')
      })
    })

    describe('middle section', () => {
      it('should render', () => {
        const ArticleCard = require('../ArticleCard').default
        const wrapper = mountComponent(<ArticleCard article={ARTICLE_MOCK} />)

        expect(wrapper.find('section')).toHaveLength(2)
      })

      it('should render article title', () => {
        const ArticleCard = require('../ArticleCard').default
        const wrapper = mountComponent(<ArticleCard article={ARTICLE_MOCK} />)

        expect(
          wrapper
            .find('section')
            .last()
            .find('h1')
            .props().children
        ).toEqual('title')
      })

      it('should render article description', () => {
        const ArticleCard = require('../ArticleCard').default
        const wrapper = mountComponent(<ArticleCard article={ARTICLE_MOCK} />)

        expect(
          wrapper
            .find('section')
            .last()
            .find('label')
            .props().children
        ).toEqual('description')
      })
    })

    describe('footer', () => {
      it('should render', () => {
        const ArticleCard = require('../ArticleCard').default
        const wrapper = mountComponent(<ArticleCard article={ARTICLE_MOCK} />)

        expect(wrapper.exists('footer')).toBeTruthy()
      })

      it('should render categoryList', () => {
        const ArticleCard = require('../ArticleCard').default
        const wrapper = mountComponent(<ArticleCard article={ARTICLE_MOCK} />)

        expect(
          wrapper
            .find('footer')
            .find('div')
            .first()
            .props().children
        ).toHaveLength(1)
      })

      it('should render visibility and edit icons', () => {
        const ArticleCard = require('../ArticleCard').default
        const wrapper = mountComponent(<ArticleCard article={ARTICLE_MOCK} />)

        expect(
          wrapper
            .find('footer')
            .find('div')
            .last()
            .props().children
        ).toHaveLength(2)
      })
    })
  })
})

const ARTICLE_MOCK: Required<IArticleList> = {
  likes: 1,
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
  categoryList: [
    {
      name: 'name',
      categoryId: 1
    }
  ]
}
