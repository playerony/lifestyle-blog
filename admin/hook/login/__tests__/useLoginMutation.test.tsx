import { mount } from 'enzyme'
import React, { useState, useEffect } from 'react'
import { MockedProvider } from '@apollo/react-testing'

import useLoginMutation from '../useLoginMutation'

import { LOGIN_MUTATION } from '../useLoginMutation/useLoginMutation.mutation'

describe('useLoginMutation Hook', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('import useLoginMutation', () => {
    expect(typeof useLoginMutation).toBe('function')
  })

  it('should keep data as undefined until data is actually returned', done => {
    const Component = (): null => {
      const [data, setData] = useState<any>()

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
      <MockedProvider mocks={LOGIN_MOCK}>
        <Component />
      </MockedProvider>
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
