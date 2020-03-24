import {
  Editor,
  RichUtils,
  EditorState,
  ContentBlock,
  convertToRaw,
  DraftHandleValue
} from 'draft-js'
import React, { useState, useEffect } from 'react'

import ImageComponent from './ImageComponent'
import BlockTypeControl from './BlockTypeControl'
import InlineStyleControl from './InlineStyleControl'

import { IEditorInputProps } from './EditorInput.type'

import getBlockStyle from './getBlockStyle'
import customStyleMap from './customStyleMap'
import getInitialState from './getInitialState'

import {
  StyledLabel,
  StyledWrapper,
  StyledErrorLabel,
  StyledEditorWrapper
} from './EditorInput.style'

const EditorInput = ({
  label,
  onBlur,
  onFocus,
  onChange,
  errorMessage,
  initialValue
}: IEditorInputProps): JSX.Element => {
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [editorState, setEditorState] = useState<EditorState>(
    getInitialState(initialValue)
  )

  useEffect(() => {
    const rawContentState = convertToRaw(editorState.getCurrentContent())

    onChange(JSON.stringify(rawContentState))
  }, [editorState])

  const handleFocus = (event: React.SyntheticEvent): void => {
    setIsFocus(true)

    if (onFocus) {
      onFocus(event)
    }
  }

  const handleBlur = (event: React.SyntheticEvent): void => {
    setIsFocus(false)

    if (onBlur) {
      onBlur(event)
    }
  }

  const handleKeyCommand = (command: string): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return 'handled'
    }

    return 'not-handled'
  }

  const onTab = (event: React.KeyboardEvent): void => {
    const maxDepth = 4

    setEditorState(RichUtils.onTab(event, editorState, maxDepth))
  }

  const toggleBlockType = (blockType: string): void =>
    setEditorState(RichUtils.toggleBlockType(editorState, blockType))

  const toggleInlineStyle = (inlineStyle: string): void =>
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle))

  const myBlockRenderer = (contentBlock: ContentBlock): any => {
    const type = contentBlock.getType()

    if (type === 'image') {
      return {
        component: ImageComponent,
        editable: true
      }
    }
  }

  const isError = Boolean(errorMessage)

  return (
    <>
      <StyledWrapper isError={isError} isFocus={isFocus}>
        {label && (
          <StyledLabel isError={isError} isFocus={isFocus}>
            {label}
          </StyledLabel>
        )}
        <BlockTypeControl
          editorState={editorState}
          onToggle={toggleBlockType}
        />
        <InlineStyleControl
          editorState={editorState}
          onToggle={toggleInlineStyle}
        />
        <StyledEditorWrapper>
          <Editor
            onTab={onTab}
            spellCheck={true}
            onBlur={handleBlur}
            onFocus={handleFocus}
            editorState={editorState}
            onChange={setEditorState}
            blockStyleFn={getBlockStyle}
            customStyleMap={customStyleMap}
            blockRendererFn={myBlockRenderer}
            handleKeyCommand={handleKeyCommand}
          />
        </StyledEditorWrapper>
      </StyledWrapper>
      <StyledErrorLabel>{errorMessage}</StyledErrorLabel>
    </>
  )
}

export default React.memo(EditorInput)
