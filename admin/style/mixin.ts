import { css, FlattenSimpleInterpolation } from 'styled-components'

export const transition = (argument: string): FlattenSimpleInterpolation => css`
  -webkit-transition: ${argument};
  -moz-transition: ${argument};
  -ms-transition: ${argument};
  -o-transition: ${argument};
  transition: ${argument};
`
