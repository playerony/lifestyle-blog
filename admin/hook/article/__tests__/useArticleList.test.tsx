import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { renderHook } from '@testing-library/react-hooks'

import useArticleList from '../useArticleList'

import { ARTICLE_LIST_QUERY } from '../useArticleList/useArticleList.query'

describe('useArticleList Hook', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('import useArticleList', () => {
    expect(typeof useArticleList).toBe('function')
  })

  it('should return undefined as data if loading status is true', () => {
    const wrapper = ({ children }: any) => (
      <MockedProvider mocks={ARTICLE_LIST_MOCK}>{children}</MockedProvider>
    )

    const { result } = renderHook(() => useArticleList(), { wrapper })

    expect(result.current).toEqual({ data: undefined, loading: true })
  })

  it('should return proper data if loading status is false', async () => {
    const wrapper = ({ children }: any) => (
      <MockedProvider mocks={ARTICLE_LIST_MOCK}>{children}</MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useArticleList(), {
      wrapper
    })

    await waitForNextUpdate()
    expect(result.current).toEqual({
      data: ARTICLE_LIST_RESULT_DATA.articleList,
      loading: false
    })
  })
})

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

const ARTICLE_LIST_MOCK = [
  {
    request: {
      query: ARTICLE_LIST_QUERY
    },
    result: { data: ARTICLE_LIST_RESULT_DATA }
  }
]
