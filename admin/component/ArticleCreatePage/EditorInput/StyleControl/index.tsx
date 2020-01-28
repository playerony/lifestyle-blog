import React from 'react'

import BlockTypeControl from './BlockTypeControl'
import InlineStyleControl from './InlineStyleControl'

import IStyleControl from './IStyleControl'

const StyleControl = ({
  editorState,
  toggleBlockType,
  toggleInlineStyle
}: IStyleControl): JSX.Element => (
    <>
      <BlockTypeControl
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControl
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
    </>
  )

export default StyleControl