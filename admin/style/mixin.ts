import { css, FlattenSimpleInterpolation } from 'styled-components'

import variable from './variable'
import { IBreakpoint } from './variable/variable.type'

export const transition = (
  transitions: string
): FlattenSimpleInterpolation => css`
  transition: ${transitions};
  -o-transition: ${transitions};
  -ms-transition: ${transitions};
  -moz-transition: ${transitions};
  -webkit-transition: ${transitions};
`

export const linearGradient = (
  direction: string,
  ...colorStops: string[]
): FlattenSimpleInterpolation => {
  const formattedColorSteps = colorStops.join(', ')

  return css`
    background: nth(nth(${formattedColorSteps}, 1), 1);
    background: linear-gradient(${direction}, ${formattedColorSteps});
    background: -webkit-linear-gradient(
      legacy-direction(${direction}),
      ${formattedColorSteps}
    );
  `
}

export const transform = (
  transforms: string
): FlattenSimpleInterpolation => css`
  transform: ${transforms};
  -o-transform: ${transforms};
  -ms-transform: ${transforms};
  -moz-transform: ${transforms};
  -webkit-transform: ${transforms};
`

export const transformStyle = (
  style: string
): FlattenSimpleInterpolation => css`
  transform-style: ${style};
  -o-transform-style: ${style};
  -ms-transform-style: ${style};
  -moz-transform-style: ${style};
  -webkit-transform-style: ${style};
`

export const transformOrigin = (
  origin: string
): FlattenSimpleInterpolation => css`
  transform-origin: ${origin};
  -o-transform-origin: ${origin};
  -ms-transform-origin: ${origin};
  -moz-transform-origin: ${origin};
  -webkit-transform-origin: ${origin};
`

export const animation = (animation: string): FlattenSimpleInterpolation => css`
  animation: ${animation};
  -o-animation: ${animation};
  -ms-animation: ${animation};
  -moz-animation: ${animation};
  -webkit-animation: ${animation};
`

export const borderRadius = (radius: string): FlattenSimpleInterpolation => css`
  border-radius: ${radius};
  -moz-border-radius: ${radius};
  -webkit-border-radius: ${radius};
`

export const flexbox = (): FlattenSimpleInterpolation => css`
  display: flex;
  display: -moz-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
`

export const justifyContent = (
  justify: string
): FlattenSimpleInterpolation => css`
  -ms-flex-pack: ${justify};
  justify-content: ${justify};
  -ms-justify-content: ${justify};
  -moz-justify-content: ${justify};
  -webkit-justify-content: ${justify};
`

export const alignItems = (align: string): FlattenSimpleInterpolation => css`
  align-items: ${align};
  -ms-flex-align: ${align};
  -ms-align-items: ${align};
  -moz-align-items: ${align};
  -webkit-align-items: ${align};
`

export const flexDirection = (
  direction: string
): FlattenSimpleInterpolation => css`
  flex-direction: ${direction};
  -ms-flex-direction: ${direction};
  -moz-flex-direction: ${direction};
  -webkit-flex-direction: ${direction};
`

export const flexWrap = (wrap: string): FlattenSimpleInterpolation => css`
  flex-wrap: ${wrap};
  -ms-flex-wrap: ${wrap};
  -moz-flex-wrap: ${wrap};
  -webkit-flex-wrap: ${wrap};
`

export const boxShadow = (shadow: string): FlattenSimpleInterpolation => css`
  box-shadow: ${shadow};
  -moz-box-shadow: ${shadow};
  -webkit-box-shadow: ${shadow};
`

export const appearance = (value: string): FlattenSimpleInterpolation => css`
  appearance: ${value};
  -ms-appearance: ${value};
  -moz-appearance: ${value};
  -webkit-appearance: ${value};
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
