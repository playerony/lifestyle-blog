import React from 'react'

import ControlButton from '../ControlButton'

import IInlineStyleControl from './IInlineStyleControl'

import INLINE_STYLE from './inlineStyle'

const InlineStyleControl = ({ editorState, onToggle }: IInlineStyleControl): JSX.Element => {
  const currentStyle = editorState.getCurrentInlineStyle()

  return (
    <div>
      {INLINE_STYLE.map(({ label, style }) => (
        <ControlButton
          key={label}
          active={currentStyle.has(style)}
          label={label}
          onToggle={onToggle}
          style={style}
        />
      ))}
    </div>
  )
}

export default React.memo(InlineStyleControl)