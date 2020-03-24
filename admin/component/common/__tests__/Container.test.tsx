import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import Container from '../Container'

import ThemeProviderMock from '@component/utility/ThemeProviderMock'

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('Container Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(
      <Container>
        <ComponentMock />
      </Container>
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should wrap children with a div tags', () => {
    const wrapper = mountComponent(
      <Container>
        <ComponentMock />
      </Container>
    )

    expect(wrapper.find('div')).toHaveLength(1)
  })
})

const ComponentMock = (): JSX.Element => <h1>Component Mock</h1>
