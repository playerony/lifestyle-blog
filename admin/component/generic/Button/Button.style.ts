import styled, { css } from 'styled-components'

import { IButtonProps } from './Button.type'

import {
  flexbox,
  alignItems,
  transition,
  borderRadius,
  justifyContent
} from '@style/mixin'
import variable from '@style/variable'
import getRem from '@style/helper/getRem'

export const StyledButton = styled.button<IButtonProps>`
  width: 100%;
  cursor: pointer;
  max-width: 500px;
  position: relative;
  font-size: ${getRem(32)};
  color: ${variable.color.white};
  background-color: ${variable.color.green400};

  ${flexbox()}
  ${borderRadius('4px')}
  ${alignItems('center')}
  ${justifyContent('center')}
  ${transition('background-color 0.5s linear')}

  ${({ marginTop }: IButtonProps) =>
    marginTop &&
    css`
      margin-top: ${variable.paddingSmall}px;
    `}
    
  ${({ circle }: IButtonProps) =>
    Boolean(circle) &&
    css`
      width: 100px;
      height: 100px;

      ${borderRadius('50px')}
    `}

  &:hover {
    background-color: ${variable.color.blue500};
  }

  &:disabled {
    background-color: ${variable.color.gray500};

    &:focus,
    &:hover {
      background-color: ${variable.color.gray500};
    }
  }
`
