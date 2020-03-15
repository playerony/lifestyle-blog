import styled, { css } from 'styled-components'

import { transition, transform } from '../mixin'

interface ISlideAnimation {
  animationName: string
  animationDuration: string
  appear?: boolean
  enter?: boolean
  exit?: boolean
}

export default styled.div<ISlideAnimation>`
  ${({ appear }: ISlideAnimation) =>
    Boolean(appear) &&
    css`
      .${({ animationName }: ISlideAnimation) => animationName}-appear {
        ${transform('translate3d(100vw, 0, 0)')}
      }
      .${({ animationName }: ISlideAnimation) => animationName}-appear.${({
          animationName
        }: ISlideAnimation) => animationName}-appear-active {
        ${transform('translate3d(0, 0, 0)')}
        ${({ animationDuration }: ISlideAnimation) =>
          transition(`all ${animationDuration} linear`)}
      }
    `}

  ${({ enter }: ISlideAnimation) =>
    Boolean(enter) &&
    css`
      .${({ animationName }: ISlideAnimation) => animationName}-enter {
        ${transform('translate3d(100vw, 0, 0)')}
      }
      .${({ animationName }: ISlideAnimation) => animationName}-enter.${({
          animationName
        }: ISlideAnimation) => animationName}-enter-active {
        ${transform('translate3d(0, 0, 0)')}
        ${({ animationDuration }: ISlideAnimation) =>
          transition(`all ${animationDuration} linear`)}
      }
    `}

  ${({ exit }: ISlideAnimation) =>
    Boolean(exit) &&
    css`
      .${({ animationName }: ISlideAnimation) => animationName}-exit {
        ${transform('translate3d(0, 0, 0)')}
      }
      .${({ animationName }: ISlideAnimation) => animationName}-exit.${({
          animationName
        }: ISlideAnimation) => animationName}-exit-active {
        ${transform('translate3d(-100vw, 0, 0)')}
        ${({ animationDuration }: ISlideAnimation) =>
          transition(`all ${animationDuration} linear`)}
      }
      .${({ animationName }: ISlideAnimation) => animationName}-exit-done {
        ${transform('translate3d(-100vw, 0, 0)')}
      }
    `}
`
