import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { renderHook } from '@testing-library/react-hooks'

import useAuthenticated from '../useAuthenticated'

import { IS_AUTHENTICATED_QUERY } from '../useAuthenticated/useAuthenticated.query'

describe('useAuthenticated Hook', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('import useAuthenticated', () => {
    expect(typeof useAuthenticated).toBe('function')
  })

  it('should return undefined as data if loading status is true', () => {
    const wrapper = ({ children }: any) => (
      <MockedProvider mocks={IS_AUTHENTICATED_MOCK}>{children}</MockedProvider>
    )

    const { result } = renderHook(() => useAuthenticated(), { wrapper })

    expect(result.current).toEqual({
      isAuthenticated: undefined,
      error: undefined,
      loading: true
    })
  })

  it('should return proper data if loading status is false', async () => {
    const wrapper = ({ children }: any) => (
      <MockedProvider mocks={IS_AUTHENTICATED_MOCK}>{children}</MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useAuthenticated(), {
      wrapper
    })

    await waitForNextUpdate()
    expect(result.current).toEqual({
      isAuthenticated: IS_AUTHENTICATED_RESULT_DATA.isAuthenticated,
      error: undefined,
      loading: false
    })
  })
})

const IS_AUTHENTICATED_RESULT_DATA = {
  isAuthenticated: true
}

const IS_AUTHENTICATED_MOCK = [
  {
    request: {
      query: IS_AUTHENTICATED_QUERY
    },
    result: { data: IS_AUTHENTICATED_RESULT_DATA }
  }
]
