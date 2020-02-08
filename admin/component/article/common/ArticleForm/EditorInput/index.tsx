import React, {
  useState,
  useEffect,
  KeyboardEvent,
  SyntheticEvent
} from 'react'
import {
  Editor,
  RichUtils,
  EditorState,
  ContentBlock,
  convertToRaw,
  ContentState,
  DraftHandleValue
} from 'draft-js'
import draftToHTML from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'

import BlockTypeControl from './BlockTypeControl'
import InlineStyleControl from './InlineStyleControl'

import { IEditorInputProps } from './EditorInput.type'

import {
  StyledLabel,
  StyledWrapper,
  StyledErrorLabel,
  StyledEditorWrapper
} from './EditorInput.style'

const getInitialState = (initialValue?: string): EditorState => {
  if (!Boolean(initialValue)) {
    return EditorState.createEmpty()
  }

  const blockListFromHTML = htmlToDraft(initialValue!)

  const { contentBlocks, entityMap } = blockListFromHTML;
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);

  return EditorState.createWithContent(contentState);
}

const EditorInput = ({
  label,
  onBlur,
  onFocus,
  onChange,
  errorMessage,
  initialValue
}: IEditorInputProps): JSX.Element => {
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [editorState, setEditorState] = useState<EditorState>(getInitialState(initialValue))

  const handleFocus = (event: SyntheticEvent): void => {
    setIsFocus(true)

    if (onFocus) {
      onFocus(event)
    }
  }

  const handleBlur = (event: SyntheticEvent): void => {
    setIsFocus(false)

    if (onBlur) {
      onBlur(event)
    }
  }

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
        return `DraftEditor-blockquote`

      default:
        return ''
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
            handleKeyCommand={handleKeyCommand}
          />
        </StyledEditorWrapper>
      </StyledWrapper>
      <StyledErrorLabel>{errorMessage}</StyledErrorLabel>
    </>
  )
}

export default EditorInput
