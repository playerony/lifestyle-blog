import { EditorState } from 'draft-js'
import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import BlockTypeControl from '..'
import ControlButton from '../../ControlButton'
import ThemeProviderMock from '@component/utility/ThemeProviderMock'

import { IBlockTypeControlProps } from '../BlockTypeControl.type'

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('BlockTypeControl Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<BlockTypeControl {...PROPS_MOCK} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render header', () => {
    const wrapper = mountComponent(<BlockTypeControl {...PROPS_MOCK} />)

    expect(wrapper.exists('h4')).toBeTruthy()
    expect(wrapper.find('h4').props().children).toEqual('Block type section')
  })

  it('should render ControlButton list', () => {
    const wrapper = mountComponent(<BlockTypeControl {...PROPS_MOCK} />)

    expect(wrapper.find(ControlButton)).toHaveLength(11)
  })
})

const PROPS_MOCK: IBlockTypeControlProps = {
  onToggle: jest.fn(),
  editorState: EditorState.createEmpty()
}
