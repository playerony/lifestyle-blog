import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { renderHook } from '@testing-library/react-hooks'

import useArticle from '../useArticle'

import { ARTICLE_QUERY } from '../useArticle/useArticle.query'

describe('useArticle Hook', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('import useArticle', () => {
    expect(typeof useArticle).toBe('function')
  })

  it('should return proper data if loading status is false', async () => {
    const wrapper = ({ children }: any) => (
      <MockedProvider mocks={ARTICLE_MOCK}>{children}</MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useArticle(1), {
      wrapper
    })

    await waitForNextUpdate()
    expect(result.current).toEqual({
      data: ARTICLE_RESULT_DATA.articleById,
      loading: false
    })
  })

  describe('return undefined as data', () => {
    it('if loading status is true', () => {
      const wrapper = ({ children }: any) => (
        <MockedProvider mocks={ARTICLE_MOCK}>{children}</MockedProvider>
      )

      const { result } = renderHook(() => useArticle(1), { wrapper })

      expect(result.current).toEqual({ data: undefined, loading: true })
    })

    it('should return if data does not exists', async () => {
      const wrapper = ({ children }: any) => (
        <MockedProvider mocks={ARTICLE_MOCK}>{children}</MockedProvider>
      )

      const { result, waitForNextUpdate } = renderHook(() => useArticle(2), {
        wrapper
      })

      await waitForNextUpdate()
      expect(result.current).toEqual({ data: undefined, loading: false })
    })
  })
})

const ARTICLE_RESULT_DATA = {
  articleById: {
    title: 'title',
    content: 'content',
    description: 'description',
    categoryList: [
      {
        categoryId: 1,
        __typename: 'Category'
      }
    ],
    image: {
      imageId: 1,
      photoUrl: 'photoUrl',
      __typename: 'Image'
    },
    __typename: 'Article'
  }
}

const ARTICLE_MOCK = [
  {
    request: {
      query: ARTICLE_QUERY,
      variables: { articleId: 1 }
    },
    result: { data: ARTICLE_RESULT_DATA }
  }
]
