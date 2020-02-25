import React from 'react'
import { renderHook } from '@testing-library/react-hooks'

import ApolloProviderMock from '@component/utility/ApolloProviderMock'

import useArticle from '../useArticle'

import { ARTICLE_QUERY } from '../useArticle/useArticle.query'

describe('useArticle Hook', () => {
  it('import useArticle', () => {
    expect(typeof useArticle).toBe('function')
  })

  it('should keep data as null until data is actually returned', async () => {
    const wrapper = ({ children }: any) =>
      <ApolloProviderMock mockList={ARTICLE_MOCK}>{children}</ApolloProviderMock>

    const { result, waitForNextUpdate } = renderHook(() => useArticle(1), { wrapper })

    expect(result.current).toBeNull()

    await waitForNextUpdate()
    expect(result.current).toEqual(ARTICLE_RESULT_DATA.articleById)
  })
})

const ARTICLE_RESULT_DATA = {
  articleById: {
    title: 'title',
    content: 'content',
    description: 'description',
    categoryList: [{
      categoryId: 1,
      __typename: 'Category'
    }],
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
