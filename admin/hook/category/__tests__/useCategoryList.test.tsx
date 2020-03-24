import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { renderHook } from '@testing-library/react-hooks'

import useCategoryList from '../useCategoryList'

import { CATEGORY_LIST_QUERY } from '../useCategoryList/useCategoryList.query'

describe('useCategoryList Hook', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('import useCategoryList', () => {
    expect(typeof useCategoryList).toBe('function')
  })

  it('should return undefined as data if loading status is true', () => {
    const wrapper = ({ children }: any) => (
      <MockedProvider mocks={CATEGORY_LIST_MOCK}>{children}</MockedProvider>
    )

    const { result } = renderHook(() => useCategoryList(), { wrapper })

    expect(result.current).toEqual({ data: undefined, loading: true })
  })

  it('should return proper data if loading status is false', async () => {
    const wrapper = ({ children }: any) => (
      <MockedProvider mocks={CATEGORY_LIST_MOCK}>{children}</MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useCategoryList(), {
      wrapper
    })

    await waitForNextUpdate()
    expect(result.current).toEqual({
      data: CATEGORY_LIST_RESULT_DATA.categoryList,
      loading: false
    })
  })
})

const CATEGORY_LIST_RESULT_DATA = {
  categoryList: [
    {
      categoryId: 1,
      name: 'Category 1',
      __typename: 'Category'
    },
    {
      categoryId: 2,
      name: 'Category 2',
      __typename: 'Category'
    }
  ]
}

const CATEGORY_LIST_MOCK = [
  {
    request: {
      query: CATEGORY_LIST_QUERY
    },
    result: { data: CATEGORY_LIST_RESULT_DATA }
  }
]
