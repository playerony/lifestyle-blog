import { mount } from 'enzyme'
import React, { useState, useEffect } from 'react'

import ApolloProviderMock from '@component/utility/ApolloProviderMock'

import IArticleSave from '@type/article/IArticleSave'

import useUpdateMutation from '../useUpdateMutation'

import { UPDATE_ARTICLE_MUTATION } from '../useUpdateMutation/useUpdateMutation.query'

describe('useUpdateMutation Hook', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('import useUpdateMutation', () => {
    expect(typeof useUpdateMutation).toBe('function')
  })

  it('should keep data as undefined until data is actually returned', done => {
    const Component = (): null => {
      const [data, setData] = useState<any>()

      const updateArticle = useUpdateMutation()

      useEffect(() => {
        const doUpdate = async () => {
          const result = await updateArticle(1, EDIT_ARTICLE_DATA_MOCK)

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
      <ApolloProviderMock mockList={EDIT_ARTICLE_MOCK}>
        <Component />
      </ApolloProviderMock>
    )
  })
})

const EDIT_ARTICLE_DATA_MOCK: IArticleSave = {
  imageId: 1,
  title: 'title',
  content: 'content',
  categoryIdList: [],
  description: 'description'
}

const EDIT_ARTICLE_RESULT_DATA = {
  updateArticle: {
    articleId: 1,
    __typename: 'Article'
  }
}

const EDIT_ARTICLE_MOCK = [
  {
    request: {
      query: UPDATE_ARTICLE_MUTATION,
      variables: {
        articleId: 1,
        article: EDIT_ARTICLE_DATA_MOCK
      }
    },
    result: { data: EDIT_ARTICLE_RESULT_DATA }
  }
]
