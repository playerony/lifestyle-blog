import React from 'react'

import ControlButton from '../ControlButton'

import { IInlineStyleControlProps } from './InlineStyleControl.type'

import { StyledLabel, StyledListWrapper } from './InlineStyleControl.style'

import INLINE_STYLE_LIST from './inlineStyleList'

const InlineStyleControl = ({ editorState, onToggle }: IInlineStyleControlProps): JSX.Element => {
  const currentStyle = editorState.getCurrentInlineStyle()

  const renderInlineStyleList = (): JSX.Element[] =>
    INLINE_STYLE_LIST.map(({ label, style }) => (
      <ControlButton
        key={label}
        active={currentStyle.has(style)}
        label={label}
        onToggle={onToggle}
        style={style}
      />
    ))

  return (
    <>
      <StyledLabel>
        Inline style section
      </StyledLabel>
      <StyledListWrapper>
        {renderInlineStyleList()}
      </StyledListWrapper>
    </>
  )
}

export default React.memo(InlineStyleControl)