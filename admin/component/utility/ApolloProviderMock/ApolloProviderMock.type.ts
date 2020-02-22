import { ReactElement } from 'react'
import { MockedResponse } from 'apollo-link-mock'

export interface IApolloProviderMockProps {
  children: ReactElement
  mockList: MockedResponse[]
}
