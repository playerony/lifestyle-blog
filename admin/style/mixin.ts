import { css, FlattenSimpleInterpolation } from 'styled-components'

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

export const transform = (transforms: string) => css`
  -webkit-transform: ${transforms};
  -moz-transform: ${transforms};
  -ms-transform: ${transforms};
  -o-transform: ${transforms};
  transform: ${transforms};
`

export const transformStyle = (style: string) => css`
  -webkit-transform-style: ${style};
  -moz-transform-style: ${style};
  -ms-transform-style: ${style};
  -o-transform-style: ${style};
  transform-style: ${style};
`

export const transformOrigin = (origin: string) => css`
  -webkit-transform-origin: ${origin};
  -moz-transform-origin: ${origin};
  -ms-transform-origin: ${origin};
  -o-transform-origin: ${origin};
  transform-origin: ${origin};
`

export const animation = (animation: string) => css`
  -webkit-animation: ${animation};
  -moz-animation: ${animation};
  -ms-animation: ${animation};
  -o-animation: ${animation};
  animation: ${animation};
`

export const borderRadius = (radius: string) => css`
  border-radius: ${radius};
  -moz-border-radius: ${radius};
  -webkit-border-radius: ${radius};
`
