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
