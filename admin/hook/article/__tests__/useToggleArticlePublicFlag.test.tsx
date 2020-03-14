import { mount } from 'enzyme'
import React, { useState, useEffect } from 'react'
import { MockedProvider } from '@apollo/react-testing'

import useToggleArticlePublicFlag from '../useToggleArticlePublicFlag'

import { TOGGLE_ARTICLE_PUBLIC_FLAG_MUTATION } from '../useToggleArticlePublicFlag/useToggleArticlePublicFlag.query'

describe('useToggleArticlePublicFlag Hook', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('import useToggleArticlePublicFlag', () => {
    expect(typeof useToggleArticlePublicFlag).toBe('function')
  })

  it('should keep data as undefined until data is actually returned', done => {
    const Component = (): null => {
      const [data, setData] = useState<any>()

      const toggleArticlePublicFlag = useToggleArticlePublicFlag()

      useEffect(() => {
        const doUpdate = async () => {
          const result = await toggleArticlePublicFlag(1, true)

          setData(result)
        }

        doUpdate()
      }, [])

      if (!data) {
        expect(data).toEqual(undefined)
      } else {
        expect(data.data).toEqual(EDIT_ARTICLE_RESULT_DATA)
        done()
      }

      return null
    }

    mount(
      <MockedProvider mocks={EDIT_ARTICLE_MOCK}>
        <Component />
      </MockedProvider>
    )
  })
})

const EDIT_ARTICLE_RESULT_DATA = {
  toggleArticlePublicFlag: {
    articleId: 1,
    isPublic: true,
    __typename: 'Article'
  }
}

const EDIT_ARTICLE_MOCK = [
  {
    request: {
      query: TOGGLE_ARTICLE_PUBLIC_FLAG_MUTATION,
      variables: {
        articleId: 1,
        isPublic: true
      }
    },
    result: { data: EDIT_ARTICLE_RESULT_DATA }
  }
]
