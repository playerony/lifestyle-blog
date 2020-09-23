import React from 'react'

import ControlButton from '../ControlButton'

import TChildren from '@type/common/TChildren'
import { IBlockTypeControlProps } from './BlockTypeControl.type'

import { StyledLabel, StyledListWrapper } from './BlockTypeControl.style'

import BLOCK_TYPE_LIST from './blockTypeList'

const BlockTypeControl = ({
  editorState,
  onToggle
}: IBlockTypeControlProps): JSX.Element => {
  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  const renderBlockTypeList = (): TChildren =>
    React.Children.toArray(
      BLOCK_TYPE_LIST.map(({ label, style }) => (
        <ControlButton
          label={label}
          style={style}
          onToggle={onToggle}
          active={style === blockType}
        />
      ))
    )

  return (
    <>
      <StyledLabel>Sekcja styli typu blokowego</StyledLabel>
      <StyledListWrapper>{renderBlockTypeList()}</StyledListWrapper>
    </>
  )
}

export default React.memo(BlockTypeControl)
