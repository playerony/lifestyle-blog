import styled, { css } from 'styled-components'

import { transition } from '../mixin'

interface IFadeAnimation {
  animationName: string
  animationDuration: string
  appear?: boolean
  enter?: boolean
  exit?: boolean
}

export default styled.div<IFadeAnimation>`
  ${({ appear }: IFadeAnimation) =>
    Boolean(appear) &&
    css`
      .${({ animationName }: IFadeAnimation) => animationName}-appear {
        opacity: 0;
        z-index: 1;
      }
      .${({ animationName }: IFadeAnimation) => animationName}-appear.${({
          animationName
        }: IFadeAnimation) => animationName}-appear-active {
        opacity: 1;
        ${({ animationDuration }: IFadeAnimation) =>
          transition(`opacity ${animationDuration} linear`)}
      }
    `}

  ${({ enter }: IFadeAnimation) =>
    Boolean(enter) &&
    css`
      .${({ animationName }: IFadeAnimation) => animationName}-enter {
        opacity: 0;
        z-index: 1;
      }
      .${({ animationName }: IFadeAnimation) => animationName}-enter.${({
          animationName
        }: IFadeAnimation) => animationName}-enter-active {
        opacity: 1;
        ${({ animationDuration }: IFadeAnimation) =>
          transition(`opacity ${animationDuration} linear`)}
      }
    `}

  ${({ exit }: IFadeAnimation) =>
    Boolean(exit) &&
    css`
      .${({ animationName }: IFadeAnimation) => animationName}-exit {
        opacity: 1;
        z-index: 0;
      }
      .${({ animationName }: IFadeAnimation) => animationName}-exit.${({
          animationName
        }: IFadeAnimation) => animationName}-exit-active {
        opacity: 0;
        ${({ animationDuration }: IFadeAnimation) =>
          transition(`opacity ${animationDuration} linear`)}
      }
      .${({ animationName }: IFadeAnimation) => animationName}-exit-done {
        opacity: 0;
      }
    `}
`
