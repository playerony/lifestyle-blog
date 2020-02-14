import styled, { css } from 'styled-components'

import variable from '@style/variable'
import { ThemeProps } from '@style/theme'
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
  background-position: 0 0;
  left: ${variable.paddingSmall}px;
  color: ${({ theme }: ThemeProps) => theme.color.border};

  ${borderRadius('5px')}
  ${transition('all 500ms linear')}

  ${({ theme }: ThemeProps) =>
    linearGradient(
      '180deg',
      `rgba(0, 0, 0, 0) 44%`,
      `${theme.color.input} 0`,
      `${theme.color.input} 100%`
    )}

  ${({ isFocus }: IStyledInputLabelProps) =>
    isFocus &&
    css`
      color: ${variable.color.blue700};
    `}

  ${({ isError }: IStyledInputLabelProps) =>
    isError &&
    css`
      color: ${variable.color.red500};
    `}
`

interface IStyledInputProps {
  isError: boolean
}

export const StyledInput = styled.input<IStyledInputProps>`
  height: 46px;
  width: calc(100% - 25px);
  padding-left: ${variable.paddingSmall}px;
  color: ${({ theme }: ThemeProps) => theme.color.text};
  background-color: ${({ theme }: ThemeProps) => theme.color.input};
  border: 2px solid ${({ theme }: ThemeProps) => theme.color.border};

  ${borderRadius('4px')}
  ${transition('all 500ms linear')}

  &::placeholder {
    color: ${variable.color.gray500};
  }

  &:focus {
    border-color: ${variable.color.blue700};

    ${transition('border-color 500ms linear')}
  }

  ${({ isError }: IStyledInputProps) =>
    isError &&
    css`
      border-color: ${variable.color.red500};

      &:focus {
        border-color: ${variable.color.red500};
      }
    `}
`

export const StyledErrorLabel = styled.p`
  height: 20px;
  padding: 3px 0 0 23px;
  color: ${variable.color.red500};
`
