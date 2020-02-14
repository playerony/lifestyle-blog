import React from 'react'
import { shallow } from 'enzyme'

import ArticleList from '../ArticleList'
import ArticleListPage from '@component/article/ArticleListPage'

describe('ArticleList Page', () => {
  it('should render', () => {
    const wrapper = shallow(<ArticleList />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render ArticleListPage Component', () => {
    const wrapper = shallow(<ArticleList />)

    expect(wrapper.exists(ArticleListPage)).toBeTruthy()
    expect(Object.keys(wrapper.find(ArticleListPage).props() as {})).toHaveLength(0)
  })
})
