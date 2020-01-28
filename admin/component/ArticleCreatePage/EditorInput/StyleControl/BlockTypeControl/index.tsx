import React from 'react'

import ControlButton from '../ControlButton'

import IBlockTypeControl from './IBlockTypeControl'

import BLOCK_TYPE from './blockType'

const BlockTypeControl = ({ editorState, onToggle }: IBlockTypeControl): JSX.Element => {
  const selection = editorState.getSelection()
  const blockType =
    editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType()

  return (
    <div>
      {BLOCK_TYPE.map(({ label, style }) => (
        <ControlButton
          key={label}
          active={style === blockType}
          label={label}
          onToggle={onToggle}
          style={style}
        />
      ))}
    </div>
  )
}

export default React.memo(BlockTypeControl)