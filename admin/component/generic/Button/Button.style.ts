import styled, { css } from 'styled-components'

import { IButtonProps } from './Button.type'

import {
  flexbox,
  alignItems,
  transition,
  borderRadius,
  justifyContent
} from '@style/mixin'
import getRem from '@style/helper/getRem'
import { ThemeProps } from '@admin/style/theme'

export const StyledButton = styled.button<IButtonProps>`
  width: 100%;
  cursor: pointer;
  max-width: 500px;
  position: relative;
  font-size: ${getRem(32)};
  color: ${({ theme }: ThemeProps) => theme.variable.color.white};
  background-color: ${({ theme }: ThemeProps) => theme.variable.color.green400};

  ${flexbox()}
  ${borderRadius('4px')}
  ${alignItems('center')}
  ${justifyContent('center')}
  ${transition('background-color 0.5s linear')}

  ${({ marginTop, theme }: ThemeProps<IButtonProps>) =>
    marginTop &&
    css`
      margin-top: ${theme.variable.paddingSmall}px;
    `}
    
  ${({ floating, theme }: ThemeProps<IButtonProps>) =>
    floating &&
    css`
      width: 100px;
      height: 100px;
      position: fixed;
      right: ${theme.variable.paddingSmall}px;
      bottom: ${theme.variable.paddingSmall}px;

      ${borderRadius('50px')}
    `}

  &:hover {
    background-color: ${({ theme }: ThemeProps) => theme.variable.color.blue500};
  }

  &:disabled {
    background-color: ${({ theme }: ThemeProps) => theme.variable.color.gray500};

    &:focus,
    &:hover {
      background-color: ${({ theme }: ThemeProps) => theme.variable.color.gray500};
    }
  }
`
