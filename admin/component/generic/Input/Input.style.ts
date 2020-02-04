import styled, { css } from 'styled-components'

import theme, { ThemeProps } from '@style/theme'
import { transition, linearGradient, borderRadius } from '@style/mixin'

export const StyledInputWrapper = styled.div`
  margin-top: 5px;
  position: relative;
`

interface IStyledInputLabelProps {
  isFocus: boolean
  isError: boolean
}

export const StyledInputLabel = styled.p<IStyledInputLabelProps>`
  top: -10px;
  padding: 3px;
  position: absolute;
  left: ${({ theme }: ThemeProps) => theme.paddingSmall}px;
  color: ${({ theme }: ThemeProps) => theme.color.gray700};

  ${borderRadius('5px')}
  ${transition('all 0.5s linear')}
  ${linearGradient(
    '180deg',
    `rgba(0, 0, 0, 0) 44%`,
    `${theme.color.white} 0`,
    `${theme.color.white} 100%`
  )}

  ${({ isFocus, theme }: ThemeProps<IStyledInputLabelProps>) =>
    isFocus &&
    css`
      color: ${theme.color.blue700};
    `}

  ${({ isError, theme }: ThemeProps<IStyledInputLabelProps>) =>
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
  width: calc(100% - 25px);
  color: ${({ theme }: ThemeProps) => theme.color.blue800};
  padding-left: ${({ theme }: ThemeProps) => theme.paddingSmall}px;
  background-color: ${({ theme }: ThemeProps) => theme.color.white};
  border: 2px solid ${({ theme }: ThemeProps) => theme.color.gray700};

  ${borderRadius('4px')}
  ${transition('all 0.5s linear')}

  &::placeholder {
    color: ${({ theme }: ThemeProps) => theme.color.gray500};
  }

  &:focus {
    border-color: ${({ theme }: ThemeProps) => theme.color.blue700};
  }

  ${({ isError, theme }: ThemeProps<IStyledInputProps>) =>
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
  padding: 3px 0 0 23px;
  color: ${({ theme }: ThemeProps) => theme.color.red500};
`
