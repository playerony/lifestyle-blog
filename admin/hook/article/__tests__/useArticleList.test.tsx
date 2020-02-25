import React from 'react'
import { renderHook } from '@testing-library/react-hooks'

import ApolloProviderMock from '@component/utility/ApolloProviderMock'

import useArticleList from '../useArticleList'

import { ARTICLE_LIST_QUERY } from '../useArticleList/useArticleList.query'

describe('useArticleList Hook', () => {
  it('import useArticleList', () => {
    expect(typeof useArticleList).toBe('function')
  })

  it('should keep data as null until data is actually returned', async () => {
    const wrapper = ({ children }: any) =>
      <ApolloProviderMock mockList={ARTICLE_LIST_MOCK}>{children}</ApolloProviderMock>

    const { result, waitForNextUpdate } = renderHook(() => useArticleList(), { wrapper })

    expect(result.current).toBeNull()

    await waitForNextUpdate()
    expect(result.current).toEqual(ARTICLE_LIST_RESULT_DATA.articleList)
  })
})

const ARTICLE_LIST_RESULT_DATA = {
  articleList: [
    {
      articleId: 1,
      title: 'title',
      description: 'description',
      createdAt: new Date('2020'),
      categoryList: [{
        categoryId: 1,
        name: 'name 1',
        __typename: 'Category'
      }],
      image: {
        photoUrl: 'photoUrl',
        __typename: 'Image'
      },
      __typename: 'Article'
    },
  ]
}

const ARTICLE_LIST_MOCK = [
  {
    request: {
      query: ARTICLE_LIST_QUERY
    },
    result: { data: ARTICLE_LIST_RESULT_DATA }
  }
]
