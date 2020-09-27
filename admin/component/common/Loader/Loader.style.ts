import styled from 'styled-components'

import {
  transform,
  transformOrigin,
  transformStyle,
  animation
} from '@style/mixin'
import variable from '@style/variable'
import { ThemeProps } from '@style/theme'
import getLightenDarkenColor from '@style/helper/getLightenDarkenColor'

const SIZE = 32
const DURATION = '800ms'

export const StyledBoxList = styled.div`
  position: relative;
  width: ${SIZE * 3}px;
  height: ${SIZE * 2}px;
  margin-top: ${SIZE * -1.5}px;

  ${transformOrigin('50% 50%')}
  ${transformStyle('preserve-3d')}
  ${transform('rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px)')}
`

export const StyledBox = styled.div`
  top: 0;
  left: 0;
  width: ${SIZE}px;
  height: ${SIZE}px;
  position: absolute;
  ${transformStyle('preserve-3d')}

  & > div {
    top: auto;
    left: auto;
    width: 100%;
    right: auto;
    height: 100%;
    bottom: auto;
    position: absolute;
    background: ${variable.color.purple700};

    ${transform(`rotateY(0deg) rotateX(0deg) translateZ(${SIZE / 2}px)`)}

    &:nth-child(1) {
      top: 0;
      left: 0;
    }

    &:nth-child(2) {
      right: 0;
      background: ${getLightenDarkenColor(variable.color.purple700, -30)};

      ${transform(`rotateY(90deg) rotateX(0deg) translateZ(${SIZE / 2}px)`)}
    }

    &:nth-child(3) {
      background: ${getLightenDarkenColor(variable.color.purple700, -10)};

      ${transform(`rotateY(90deg) rotateX(-90deg) translateZ(${SIZE / 2}px)`)}
    }

    &:nth-child(4) {
      top: 0;
      left: 0;
      background: ${({ theme }: ThemeProps) => theme.color.icon};

      ${transform(
        `rotateY(-180deg) rotateX(-180deg) translateZ(${SIZE * -3}px)`
      )}
    }
  }

  &:nth-child(1) {
    ${transform(`translate(100%, 0)`)}
    ${animation(`box1 ${DURATION} linear infinite`)}
  }

  &:nth-child(2) {
    ${transform(`translate(0, 100%)`)}
    ${animation(`box2 ${DURATION} linear infinite`)}
  }

  &:nth-child(3) {
    ${transform(`translate(100%, 100%)`)}
    ${animation(`box3 ${DURATION} linear infinite`)}
  }

  &:nth-child(4) {
    ${transform(`translate(200%, 0)`)}
    ${animation(`box4 ${DURATION} linear infinite`)}
  }

  @keyframes box1 {
    0%,
    50% {
      ${transform(`translate(100%, 0)`)}
    }
    100% {
      ${transform(`translate(200%, 0)`)}
    }
  }

  @keyframes box2 {
    0% {
      ${transform(`translate(0, 100%)`)}
    }
    50% {
      ${transform(`translate(0, 0)`)}
    }
    100% {
      ${transform(`translate(100%, 0)`)}
    }
  }

  @keyframes box3 {
    0%,
    50% {
      ${transform(`translate(100%, 100%)`)}
    }
    100% {
      ${transform(`translate(0, 100%)`)}
    }
  }

  @keyframes box4 {
    0% {
      ${transform(`translate(200%, 0)`)}
    }
    50% {
      ${transform(`translate(200%, 100%)`)}
    }
    100% {
      ${transform(`translate(100%, 100%)`)}
    }
  }
`
