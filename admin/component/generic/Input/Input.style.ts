import styled, { css } from 'styled-components'

import variable from '@style/variable'
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
  left: ${variable.paddingSmall}px;
  color: ${variable.color.gray700};

  ${borderRadius('5px')}
  ${transition('all 0.5s linear')}

  ${linearGradient(
    '180deg',
    `rgba(0, 0, 0, 0) 44%`,
    `${variable.color.white} 0`,
    `${variable.color.white} 100%`
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
  color: ${variable.color.blue800};
  padding-left: ${variable.paddingSmall}px;
  background-color: ${variable.color.white};
  border: 2px solid ${variable.color.gray700};

  ${borderRadius('4px')}
  ${transition('all 0.5s linear')}

  &::placeholder {
    color: ${variable.color.gray500};
  }

  &:focus {
    border-color: ${variable.color.blue700};
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
