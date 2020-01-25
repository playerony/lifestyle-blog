import React, { useState, useEffect } from 'react'
import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/react-testing'

import useLoginMutation from '../useLoginMutation'
import { LOGIN_MUTATION_QUERY } from '../useLoginMutation/useLoginMutation.query'

describe('useLoginMutation Hook', () => {
  beforeAll(() => {
    console.error = jest.fn()
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
      <MockedProvider mocks={LOGIN_MOCKS}>
        <Component />
      </MockedProvider>
    )
  })
})

const LOGIN_RESULT_DATA = {
  login: [
    [
      {
        token: '123',
        __typename: 'Login'
      }
    ]
  ]
}

const LOGIN_MOCKS = [
  {
    request: {
      query: LOGIN_MUTATION_QUERY,
      variables: {
        login: 'admin',
        password: 'admin'
      }
    },
    result: { data: LOGIN_RESULT_DATA }
  }
]
