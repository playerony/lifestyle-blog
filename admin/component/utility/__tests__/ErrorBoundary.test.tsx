import { History } from 'history'
import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import ErrorBoundary from '../ErrorBoundary'

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(
    <MemoryRouter>
      <ErrorBoundary>
        {element}
      </ErrorBoundary>
    </MemoryRouter>
  )

describe('ErrorBoundary Component', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should render', () => {
    const wrapper = mountComponent(<ComponentMock />)

    expect(expect(wrapper.exists())).toBeTruthy()
  })

  it('should redirect to 500 error page when error occured', () => {
    const wrapper = mountComponent(<ErrorComponentMock />)

    const history: History = wrapper.find('Router').prop('history')
    expect(history.location.pathname).toEqual('/admin/error/500')
  })
})

const ComponentMock = (): JSX.Element => <h1>Component</h1>

const ErrorComponentMock = () => {
  throw new Error('Error')
}
