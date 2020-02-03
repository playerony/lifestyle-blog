import React, { useRef, useState, useEffect, KeyboardEvent } from 'react'
import {
  Editor,
  RichUtils,
  EditorState,
  ContentBlock,
  convertToRaw,
  DraftHandleValue
} from 'draft-js'
import draftToHTML from 'draftjs-to-html'

import BlockTypeControl from './BlockTypeControl'
import InlineStyleControl from './InlineStyleControl'

import { IEditorInputProps } from './EditorInput.type'

import { StyledWrapper, StyledLabel, StyledEditorWrapper } from './EditorInput.style'

const EditorInput = ({ label, onChange }: IEditorInputProps): JSX.Element => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())

  const editorRef = useRef<Editor>(null)

  const focus = (): null | void => editorRef.current && editorRef.current?.focus()

  useEffect(() => {
    focus()
  }, []);

  useEffect(() => {
    const rawContentState = convertToRaw(editorState.getCurrentContent())
    const htmlContent = draftToHTML(rawContentState)

    onChange(htmlContent)
  }, [editorState])

  const handleKeyCommand = (command: string): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)

      return 'handled'
    }

    return 'not-handled'
  }

  const onTab = (event: KeyboardEvent): void => {
    const maxDepth = 4

    setEditorState(RichUtils.onTab(event, editorState, maxDepth))
  }

  const toggleBlockType = (blockType: string): void =>
    setEditorState(RichUtils.toggleBlockType(editorState, blockType))

  const toggleInlineStyle = (inlineStyle: string): void =>
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle))

  const getBlockStyle = (block: ContentBlock): string => {
    switch (block.getType()) {
      case 'blockquote':
      case 'align-left':
      case 'align-right':
      case 'align-center':
        return `DraftEditor-${block.getType()}`

      default:
        return ''
    }
  }

  return (
    <StyledWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <BlockTypeControl
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControl
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <StyledEditorWrapper onClick={focus}>
        <Editor
          onTab={onTab}
          ref={editorRef}
          spellCheck={true}
          blockStyleFn={getBlockStyle}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </StyledEditorWrapper>
    </StyledWrapper>
  )
}

export default EditorInput
