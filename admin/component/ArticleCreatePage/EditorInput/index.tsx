import React, { useRef, useState, useEffect, KeyboardEvent } from 'react'
import { Editor, EditorState, RichUtils, DraftHandleValue } from 'draft-js'

import BlockTypeControl from './BlockTypeControl'
import InlineStyleControl from './InlineStyleControl'

import IEditorInput from './IEditorInput'

import { StyledWrapper, StyledLabel } from './EditorInput.style'

const EditorInput = ({ label }: IEditorInput): JSX.Element => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty())

  const editorRef = useRef<Editor>(null)

  const focus = (): null | void => editorRef.current && editorRef.current?.focus()

  useEffect(() => {
    focus()
  }, []);

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
      <div onClick={focus}>
        <Editor
          onTab={onTab}
          ref={editorRef}
          spellCheck={true}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </StyledWrapper>
  )
}

export default EditorInput
