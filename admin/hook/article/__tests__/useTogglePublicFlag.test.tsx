import { mount } from 'enzyme'
import React, { useState, useEffect } from 'react'
import { MockedProvider } from '@apollo/react-testing'

import useTogglePublicFlag from '../useTogglePublicFlag'

import { TOGGLE_PUBLIC_FLAG_MUTATION } from '../useTogglePublicFlag/useTogglePublicFlag.mutation'

describe('useTogglePublicFlag Hook', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('import useTogglePublicFlag', () => {
    expect(typeof useTogglePublicFlag).toBe('function')
  })

  it('should keep data as undefined until data is actually returned', done => {
    const Component = (): null => {
      const [data, setData] = useState<any>()

      const toggleArticlePublicFlag = useTogglePublicFlag()

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
      query: TOGGLE_PUBLIC_FLAG_MUTATION,
      variables: {
        articleId: 1,
        isPublic: true
      }
    },
    result: { data: EDIT_ARTICLE_RESULT_DATA }
  }
]
