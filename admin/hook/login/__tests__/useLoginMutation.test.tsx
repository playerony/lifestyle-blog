import { mount } from 'enzyme'
import React, { useState, useEffect } from 'react'

import ApolloProviderMock from '@admin/component/utility/ApolloProviderMock'

import useLoginMutation from '../useLoginMutation'

import { LOGIN_MUTATION } from '../useLoginMutation/useLoginMutation.query'

describe('useLoginMutation Hook', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('import useLoginMutation', () => {
    expect(typeof useLoginMutation).toBe('function')
  })

  it('should keep data as undefined until data is actually returned', done => {
    const Component = (): null => {
      const [data, setData] = useState()

      const login = useLoginMutation()

      useEffect(() => {
        const doLogin = async () => {
          const result = await login({ login: 'admin', password: 'admin' })

          setData(result)
        }

        doLogin()
      }, [])

      if (!data) {
        expect(data).toEqual(undefined)
      } else {
        expect(data.data).toEqual(LOGIN_RESULT_DATA)
        done()
      }

      return null
    }

    mount(
      <ApolloProviderMock mockList={LOGIN_MOCK}>
        <Component />
      </ApolloProviderMock>
    )
  })
})

const LOGIN_RESULT_DATA = {
  login: {
    token: '123',
    __typename: 'Login'
  }
}

const LOGIN_MOCK = [
  {
    request: {
      query: LOGIN_MUTATION,
      variables: {
        login: 'admin',
        password: 'admin'
      }
    },
    result: { data: LOGIN_RESULT_DATA }
  }
]
