import { CSSProperties } from 'react'

type TCustomStyleMap = { [key: string]: CSSProperties }

const customStyleMap: TCustomStyleMap = {
  LEFT: {
    display: 'block',
    textAlign: 'left'
  },
  CENTER: {
    display: 'block',
    textAlign: 'center'
  },
  RIGHT: {
    display: 'block',
    textAlign: 'right'
  }
}

export default customStyleMap
