import { mount } from 'enzyme'
import React, { useState, useEffect } from 'react'
import { MockedProvider } from '@apollo/react-testing'

import useUploadMutation from '../useUploadMutation'

import { UPLOAD_MUTATION_QUERY } from '../useUploadMutation/useUploadMutation.query'

describe('useUploadMutation Hook', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should keep data as undefined until data is actually returned', done => {
    const Component = (): null => {
      const [data, setData] = useState()

      const uploadImage = useUploadMutation()

      useEffect(() => {
        const doUpload = async () => {
          const result = await uploadImage(UPLOAD_IMAGE_REQUEST_MOCK)

          setData(result)
        }

        doUpload()
      }, [])

      if (!data) {
        expect(data).toEqual(undefined)
      } else {
        expect(data).toEqual(UPLOAD_IMAGE_RESULT_DATA.uploadImage)
        done()
      }

      return null
    }

    mount(
      <MockedProvider mocks={UPLOAD_IMAGE_MOCK}>
        <Component />
      </MockedProvider>
    )
  })
})

const UPLOAD_IMAGE_REQUEST_MOCK: File = {
  name: 'name',
  size: 123123,
  type: 'jpeg',
  slice: jest.fn(),
  lastModified: new Date().getTime()
}

const UPLOAD_IMAGE_RESULT_DATA = {
  uploadImage: {
    imageId: 1,
    __typename: 'Image'
  }
}

const UPLOAD_IMAGE_MOCK = [
  {
    request: {
      query: UPLOAD_MUTATION_QUERY,
      variables: {
        file: UPLOAD_IMAGE_REQUEST_MOCK
      }
    },
    result: { data: UPLOAD_IMAGE_RESULT_DATA }
  }
]