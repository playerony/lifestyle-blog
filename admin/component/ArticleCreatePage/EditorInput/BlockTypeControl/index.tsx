import React from 'react'

import ControlButton from '../ControlButton'

import IBlockTypeControl from './IBlockTypeControl'

import { StyledLabel, StyledListWrapper } from './BlockTypeControl.style'

import BLOCK_TYPE_LIST from './blockTypeList'

const BlockTypeControl = ({ editorState, onToggle }: IBlockTypeControl): JSX.Element => {
  const selection = editorState.getSelection()
  const blockType =
    editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType()

  const renderBlockTypeList = (): JSX.Element[] =>
    BLOCK_TYPE_LIST.map(({ label, style }) => (
      <ControlButton
        key={label}
        active={style === blockType}
        label={label}
        onToggle={onToggle}
        style={style}
      />
    ))

  return (
    <>
      <StyledLabel>
        Block type section
      </StyledLabel>
      <StyledListWrapper>
        {renderBlockTypeList()}
      </StyledListWrapper>
    </>
  )
}

export default React.memo(BlockTypeControl)