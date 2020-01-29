import styled, { css } from 'styled-components'

import IInput from './IInput'

import { transition, linearGradient, borderRadius } from '@style/mixin'
import theme, { ThemeProps } from '@style/theme'

export const StyledInputWrapper = styled.div`
  position: relative;
  margin-top: 5px;
`

interface IStyledInputLabelProps {
  isFocus: boolean
  isError: boolean
}

export const StyledInputLabel = styled.p<IStyledInputLabelProps>`
  position: absolute;
  top: -8px;
  left: 15px;
  padding: 3px;
  color: ${({ theme }: ThemeProps) => theme.color.gray700};

  ${borderRadius('5px')}
  ${transition('all 0.5s linear')}
  ${linearGradient(
    '180deg',
    `rgba(0, 0, 0, 0) 44%`,
    `${theme.color.white} 0`,
    `${theme.color.white} 100%`
  )}

  ${({ isFocus }: IStyledInputLabelProps) =>
    isFocus &&
    css`
      color: ${theme.color.blue700};
    `}

  ${({ isError }: IStyledInputLabelProps) =>
    isError &&
    css`
      color: ${theme.color.red500};
    `}
`

interface IStyledInputProps {
  isError: boolean
}

export const StyledInput = styled.input<IStyledInputProps>`
  height: 46px;
  width: calc(100% - 20px);
  padding-left: 15px;
  color: ${({ theme }: ThemeProps<IInput>) => theme.color.blue800};
  background-color: ${({ theme }: ThemeProps<IInput>) => theme.color.white};
  border: 2px solid ${({ theme }: ThemeProps<IInput>) => theme.color.gray700};

  ${borderRadius('4px')}
  ${transition('all 0.5s linear')}

  &::placeholder {
    color: ${({ theme }: ThemeProps<IInput>) => theme.color.gray500};
  }

  &:focus {
    border-color: ${({ theme }: ThemeProps<IInput>) => theme.color.blue700};
  }

  ${({ isError }: IStyledInputProps) =>
    isError &&
    css`
      border-color: ${theme.color.red500};

      &:focus {
        border-color: ${theme.color.red500};
      }
    `}
`

export const StyledErrorLabel = styled.p`
  height: 20px;
  padding: 3px 0 0 18px;
  color: ${({ theme }: ThemeProps<IInput>) => theme.color.red500};
`
