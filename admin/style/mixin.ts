import { css, FlattenSimpleInterpolation } from 'styled-components'

import variable from './variable'
import { IBreakpoint } from './variable/variable.type'

export const transition = (argument: string): FlattenSimpleInterpolation => css`
  -webkit-transition: ${argument};
  -moz-transition: ${argument};
  -ms-transition: ${argument};
  -o-transition: ${argument};
  transition: ${argument};
`

export const linearGradient = (
  direction: string,
  ...colorStops: string[]
): FlattenSimpleInterpolation => {
  const formattedColorSteps = colorStops.join(', ')

  return css`
    background: nth(nth(${formattedColorSteps}, 1), 1);
    background: -webkit-linear-gradient(
      legacy-direction(${direction}),
      ${formattedColorSteps}
    );
    background: linear-gradient(${direction}, ${formattedColorSteps});
  `
}

export const transform = (
  transforms: string
): FlattenSimpleInterpolation => css`
  -webkit-transform: ${transforms};
  -moz-transform: ${transforms};
  -ms-transform: ${transforms};
  -o-transform: ${transforms};
  transform: ${transforms};
`

export const transformStyle = (
  style: string
): FlattenSimpleInterpolation => css`
  -webkit-transform-style: ${style};
  -moz-transform-style: ${style};
  -ms-transform-style: ${style};
  -o-transform-style: ${style};
  transform-style: ${style};
`

export const transformOrigin = (
  origin: string
): FlattenSimpleInterpolation => css`
  -webkit-transform-origin: ${origin};
  -moz-transform-origin: ${origin};
  -ms-transform-origin: ${origin};
  -o-transform-origin: ${origin};
  transform-origin: ${origin};
`

export const animation = (animation: string): FlattenSimpleInterpolation => css`
  -webkit-animation: ${animation};
  -moz-animation: ${animation};
  -ms-animation: ${animation};
  -o-animation: ${animation};
  animation: ${animation};
`

export const borderRadius = (radius: string): FlattenSimpleInterpolation => css`
  border-radius: ${radius};
  -moz-border-radius: ${radius};
  -webkit-border-radius: ${radius};
`

export const flexbox = (): FlattenSimpleInterpolation => css`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
`

export const justifyContent = (
  justify: string
): FlattenSimpleInterpolation => css`
  -webkit-justify-content: ${justify};
  -moz-justify-content: ${justify};
  -ms-justify-content: ${justify};
  justify-content: ${justify};
  -ms-flex-pack: ${justify};
`

export const alignItems = (align: string): FlattenSimpleInterpolation => css`
  -webkit-align-items: ${align};
  -moz-align-items: ${align};
  -ms-align-items: ${align};
  -ms-flex-align: ${align};
  align-items: ${align};
`

export const flexDirection = (
  direction: string
): FlattenSimpleInterpolation => css`
  -webkit-flex-direction: ${direction};
  -moz-flex-direction: ${direction};
  -ms-flex-direction: ${direction};
  flex-direction: ${direction};
`

export const flexWrap = (wrap: string): FlattenSimpleInterpolation => css`
  -webkit-flex-wrap: ${wrap};
  -moz-flex-wrap: ${wrap};
  -ms-flex-wrap: ${wrap};
  flex-wrap: ${wrap};
`

export const boxShadow = (shadow: string): FlattenSimpleInterpolation => css`
  -webkit-box-shadow: ${shadow};
  -moz-box-shadow: ${shadow};
  box-shadow: ${shadow};
`

export const appearance = (value: string): FlattenSimpleInterpolation => css`
  -webkit-appearance: ${value};
  -moz-appearance: ${value};
  -ms-appearance: ${value};
  appearance: ${value};
`

export const respondTo = (Object.keys(
  variable.breakpoint
) as (keyof IBreakpoint)[]).reduce<
  {
    [key in keyof IBreakpoint]: (
      style: TemplateStringsArray,
      ...args: Array<any>
    ) => FlattenSimpleInterpolation
  }
>((accumulator, breakpoint) => {
  accumulator[breakpoint] = (
    style: TemplateStringsArray,
    ...args: Array<any>
  ): FlattenSimpleInterpolation => css`
    @media (max-width: ${variable.breakpoint[breakpoint]}px) {
      ${css(style, ...args)};
    }
  `

  return accumulator
}, {} as any)
