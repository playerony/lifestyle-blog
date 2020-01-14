import styled, { css } from 'styled-components'

import IInput, { TInputStatus } from './IInput'

import { transition, linearGradient } from '@style/mixin'
import theme, { ThemeProps } from '@style/theme'

export const StyledInputWrapper = styled.div`
  position: relative;
  margin-top: 5px;
`

interface IStyledInputLabelProps {
  isFocus: boolean
  status?: TInputStatus
}

export const StyledInputLabel = styled.label<IStyledInputLabelProps>`
  position: absolute;
  top: -8px;
  left: 15px;
  ${transition('all 0.5s linear')}

  padding: 3px;
  ${linearGradient(
    '180deg',
    `rgba(0, 0, 0, 0) 45%`,
    `${theme.color.white} 0`,
    `${theme.color.white} 100%`
  )}
  border-radius: 5px;

  ${({ isFocus }: IStyledInputLabelProps) =>
    isFocus &&
    css`
      color: ${theme.color.blue700};
    `}
`

export const StyledInput = styled.input`
  height: 46px;
  width: 100%;
  border-radius: 4px;
  border: 2px solid ${({ theme }: ThemeProps<IInput>) => theme.color.gray700};
  background-color: ${({ theme }: ThemeProps<IInput>) => theme.color.white};
  ${transition('all 0.5s linear')}

  &:focus {
    border-color: ${({ theme }: ThemeProps<IInput>) => theme.color.blue700};
  }
`
