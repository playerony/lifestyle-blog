import { ReactElement } from 'react'
import { MockedResponse } from 'apollo-link-mock'

export interface IApolloMockProviderProps {
  children: ReactElement
  mockList: MockedResponse[]
}
