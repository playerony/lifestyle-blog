import React from 'react'

import ControlButton from '../ControlButton'

import TChildren from '@type/common/TChildren'
import { IInlineStyleControlProps } from './InlineStyleControl.type'

import { StyledLabel, StyledListWrapper } from './InlineStyleControl.style'

import INLINE_STYLE_LIST from './inlineStyleList'

const InlineStyleControl = ({
  editorState,
  onToggle
}: IInlineStyleControlProps): JSX.Element => {
  const currentStyle = editorState.getCurrentInlineStyle()

  const renderInlineStyleList = (): TChildren =>
    React.Children.toArray(
      INLINE_STYLE_LIST.map(({ label, style }) => (
        <ControlButton
          active={currentStyle.has(style)}
          label={label}
          onToggle={onToggle}
          style={style}
        />
      ))
    )

  return (
    <>
      <StyledLabel>Sekcja styli typu inline</StyledLabel>
      <StyledListWrapper>{renderInlineStyleList()}</StyledListWrapper>
    </>
  )
}

export default React.memo(InlineStyleControl)
