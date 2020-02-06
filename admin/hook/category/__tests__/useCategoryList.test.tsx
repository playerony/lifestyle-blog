import React from 'react'
import { mount } from 'enzyme'
import { isEqual } from 'lodash'
import { MockedProvider } from '@apollo/react-testing'

import useCategoryList from '../useCategoryList'

import { CATEGORY_LIST_QUERY } from '../useCategoryList/useCategoryList.query'

describe('useCategoryList Hook', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should keep data as undefined until data is actually returned', done => {
    const Component = (): null => {
      const { data, loading } = useCategoryList()

      if (loading) {
        expect(data).toBeUndefined()
      } else {
        expect(isEqual(data, CATEGORY_LIST_RESULT_DATA.categoryList)).toBeTruthy()
        done()
      }

      return null
    }

    mount(
      <MockedProvider mocks={CATEGORY_LIST_MOCK}>
        <Component />
      </MockedProvider>
    )
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
