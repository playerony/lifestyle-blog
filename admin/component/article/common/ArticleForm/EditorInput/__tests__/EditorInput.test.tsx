import { Editor } from 'draft-js'
import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import EditorInput from '..'
import BlockTypeControl from '../BlockTypeControl'
import InlineStyleControl from '../InlineStyleControl'
import ThemeProviderMock from '@utility/ThemeProviderMock'

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('EditorInput Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<EditorInput onChange={jest.fn()} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Editor label', () => {
    it('should not render', () => {
      const wrapper = mountComponent(<EditorInput onChange={jest.fn()} />)

      expect(wrapper.find('p')).toHaveLength(1)
      expect(wrapper.find('p').props().children).not.toBeDefined()
    })

    it('should render', () => {
      const wrapper = mountComponent(<EditorInput label="Label" onChange={jest.fn()} />)

      expect(wrapper.find('p')).toHaveLength(2)
      expect(wrapper.find('p').first().props().children).toEqual('Label')
    })
  })

  it('should render BlockTypeControl component', () => {
    const wrapper = mountComponent(<EditorInput onChange={jest.fn()} />)

    expect(wrapper.find(BlockTypeControl)).toHaveLength(1)

    const blockTypeControlProps = wrapper.find(BlockTypeControl).props()
    expect(blockTypeControlProps.onToggle).toBeDefined()
    expect(blockTypeControlProps.editorState).toBeDefined()
  })

  it('should render InlineStyleControl component', () => {
    const wrapper = mountComponent(<EditorInput onChange={jest.fn()} />)

    expect(wrapper.find(InlineStyleControl)).toHaveLength(1)

    const inlineStyleControlProps = wrapper.find(InlineStyleControl).props()
    expect(inlineStyleControlProps.onToggle).toBeDefined()
    expect(inlineStyleControlProps.editorState).toBeDefined()
  })

  it('should render draft-js Editor', () => {
    const wrapper = mountComponent(<EditorInput onChange={jest.fn()} />)

    expect(wrapper.find(Editor)).toHaveLength(1)

    const editorProps = wrapper.find(Editor).props()
    expect(editorProps.onTab).toBeDefined()
    expect(editorProps.onBlur).toBeDefined()
    expect(editorProps.onFocus).toBeDefined()
    expect(editorProps.spellCheck).toBeTruthy()
    expect(editorProps.spellCheck).toBeTruthy()
    expect(editorProps.editorState).toBeDefined()
    expect(editorProps.blockStyleFn).toBeDefined()
    expect(editorProps.handleKeyCommand).toBeDefined()
  })

  describe('Editor error label', () => {
    it('should not render', () => {
      const wrapper = mountComponent(<EditorInput onChange={jest.fn()} />)

      expect(wrapper.find('p')).toHaveLength(1)
      expect(wrapper.find('p').props().children).not.toBeDefined()
    })

    it('should render', () => {
      const wrapper = mountComponent(<EditorInput errorMessage="Error" onChange={jest.fn()} />)

      expect(wrapper.find('p')).toHaveLength(1)
      expect(wrapper.find('p').props().children).toEqual('Error')
    })
  })
})
