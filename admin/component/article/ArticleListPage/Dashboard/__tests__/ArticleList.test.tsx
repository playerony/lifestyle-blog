import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import Slider from '@component/common/Slider'
import ThemeProviderMock from '@component/utility/ThemeProviderMock'

import IArticleList from '@type/article/IArticleList'

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

jest.doMock('../ArticleCard', () => ArticleCardMock)

const setUp = (): ReactWrapper => {
  const ArticleList = require('../ArticleList').default

  return mountComponent(<ArticleList label="label" articleList={ARTICLE_LIST_MOCK} />)
}

describe('ArticleList Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render Slider Component', () => {
    const wrapper = setUp()

    const sliderProps = wrapper.find(Slider).props()
    expect(sliderProps.speed).toEqual(500)
    expect(sliderProps.slidesToShow).toEqual(2)
    expect(sliderProps.slidesToScroll).toEqual(2)
    expect(sliderProps.swipeToSlide).toBeTruthy()
    expect(sliderProps.className).toEqual('center')
    expect(sliderProps.lazyLoad).toEqual('ondemand')
    expect(sliderProps.responsive).toEqual([
      {
        breakpoint: 1367,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ])
  })

  it('should render two article cards', () => {
    const wrapper = setUp()

    expect(wrapper.find(ArticleCardMock)).toHaveLength(2)
  })
})

const ArticleCardMock = (): JSX.Element => <h1>Article Card</h1>

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
