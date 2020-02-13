import styled, { css } from 'styled-components'

import variable from '@style/variable'
import getRem from '@style/helper/getRem'
import { ThemeProps } from '@style/theme'
import { borderRadius, transition, linearGradient } from '@style/mixin'

export const StyledWrapper = styled.div`
  margin-top: 5px;
  position: relative;
`

interface IStyledSelectLabelProps {
  isFocus: boolean
  isError: boolean
}

export const StyledSelectLabel = styled.p<IStyledSelectLabelProps>`
  top: -10px;
  z-index: 2;
  padding: 3px;
  position: absolute;
  left: ${variable.paddingSmall}px;
  color: ${({ theme }: ThemeProps) => theme.color.border};

  ${borderRadius('5px')}
  ${transition('all 500ms linear')}

  ${({ theme }: ThemeProps) => linearGradient(
    '180deg',
    `rgba(0, 0, 0, 0) 44%`,
    `${theme.color.input} 0`,
    `${theme.color.input} 100%`
  )}

  ${({ isFocus }: IStyledSelectLabelProps) =>
    isFocus &&
    css`
      color: ${variable.color.blue700};
    `}

  ${({ isError }: IStyledSelectLabelProps) =>
    isError &&
    css`
      color: ${variable.color.red500};
    `}
`

interface IStyledSelectWrapperProps {
  isError: boolean
}

export const StyledSelectWrapper = styled.div<IStyledSelectWrapperProps>`
  .select {
    &__control {
      width: 100%;
      min-height: 50px;
      background-color: ${({ theme }: ThemeProps) => theme.color.input};
      border: 2px solid ${({ theme }: ThemeProps) => theme.color.border};

      ${transition('all 500ms linear')}

      ${({ isError }: IStyledSelectWrapperProps) =>
        isError &&
        css`
          border-color: ${variable.color.red500};
        `}

      &:hover {
        box-shadow: none;
        border: 2px solid ${variable.color.gray700};

        ${({ isError }: IStyledSelectWrapperProps) =>
          isError &&
          css`
            border-color: ${variable.color.red500};
          `}
      }

      &--is-focused,
      &--menu-is-open {
        box-shadow: none;
        border-width: 2px;
        border-color: ${variable.color.blue700};

        ${({ isError }: IStyledSelectWrapperProps) =>
          isError &&
          css`
            border-color: ${variable.color.red500};
          `}

        &:hover {
          border-color: ${variable.color.blue700};

          ${({ isError }: IStyledSelectWrapperProps) =>
            isError &&
            css`
              border-color: ${variable.color.red500};
            `}
        }
      }
    }

    &__placeholder {
      color: ${variable.color.gray500};
    }

    &__value-container {
      padding: 2px ${variable.paddingSmall}px;
    }

    &__multi-value {
      padding: 3px;
      font-size: ${getRem(20)};
      color: ${variable.color.blue800};
      background-color: ${variable.color.gray500};
    }

    &__multi-value__remove > svg {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
  }
`

export const StyledErrorLabel = styled.p`
  height: 20px;
  padding: 3px 0 0 23px;
  color: ${variable.color.red500};
`
