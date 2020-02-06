import { mount } from 'enzyme'
import React, { useState, useEffect } from 'react'
import { MockedProvider } from '@apollo/react-testing'

import IArticleSave from '@type/article/IArticleSave'

import useCreateMutation from '../useCreateMutation'

import { CREATE_ARTICLE_QUERY } from '../useCreateMutation/useCreateMutation.query'

describe('useCreateMutation Hook', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should keep data as undefined until data is actually returned', done => {
    const Component = (): null => {
      const [data, setData] = useState()

      const createArticle = useCreateMutation()

      useEffect(() => {
        const doCreate = async () => {
          const result = await createArticle(CREATE_ARTICLE_REQUEST_MOCK)

          setData(result)
        }

        doCreate()
      }, [])

      if (!data) {
        expect(data).toEqual(undefined)
      } else {
        expect(data).toEqual(CREATE_ARTICLE_RESULT_DATA.createArticle)
        done()
      }

      return null
    }

    mount(
      <MockedProvider mocks={CREATE_ARTICLE_MOCK}>
        <Component />
      </MockedProvider>
    )
  })
})

const CREATE_ARTICLE_REQUEST_MOCK: IArticleSave = {
  imageId: 1,
  title: 'title',
  content: 'content',
  categoryIdList: [],
  description: 'description'
}

const CREATE_ARTICLE_RESULT_DATA = {
  createArticle: {
    articleId: 1,
    __typename: 'Article'
  }
}

const CREATE_ARTICLE_MOCK = [
  {
    request: {
      query: CREATE_ARTICLE_QUERY,
      variables: {
        article: CREATE_ARTICLE_REQUEST_MOCK
      }
    },
    result: { data: CREATE_ARTICLE_RESULT_DATA }
  }
]