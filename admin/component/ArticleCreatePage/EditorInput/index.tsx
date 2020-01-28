import React, { useRef, useState, useEffect, KeyboardEvent } from 'react'
import { Editor, EditorState, RichUtils, DraftHandleValue } from 'draft-js'

import StyleControl from './StyleControl'

const EditorInput = (): JSX.Element => {
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
    <div>
      <StyleControl
        editorState={editorState}
        toggleBlockType={toggleBlockType}
        toggleInlineStyle={toggleInlineStyle}
      />
      <div onClick={focus}>
        <Editor
          onTab={onTab}
          ref={editorRef}
          spellCheck={true}
          editorState={editorState}
          onChange={setEditorState}
          customStyleMap={styleMap}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  )
}

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
}

export default EditorInput
