import { EditorState } from 'draft-js'
import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import InlineStyleControl from '..'
import ControlButton from '../../ControlButton'
import ThemeProviderMock from '@admin/component/utility/ThemeProviderMock'

import { IInlineStyleControlProps } from '../InlineStyleControl.type'

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('InlineStyleControl Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<InlineStyleControl {...PROPS_MOCK} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render header', () => {
    const wrapper = mountComponent(<InlineStyleControl {...PROPS_MOCK} />)

    expect(wrapper.exists('h4')).toBeTruthy()
    expect(wrapper.find('h4').props().children).toEqual('Inline style section')
  })

  it('should render ControlButton list', () => {
    const wrapper = mountComponent(<InlineStyleControl {...PROPS_MOCK} />)

    expect(wrapper.find(ControlButton)).toHaveLength(4)
  })
})

const PROPS_MOCK: IInlineStyleControlProps = {
  onToggle: jest.fn(),
  editorState: EditorState.createEmpty()
}
