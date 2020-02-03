import styled, { css } from 'styled-components'

import getRem from '@style/helper/getRem'
import theme, { ThemeProps } from '@style/theme'
import { borderRadius, transition, linearGradient } from '@style/mixin'

interface IStyledWrapperProps {
  isError: boolean
}

export const StyledWrapper = styled.div<IStyledWrapperProps>`
  position: relative;

  .select {
    &__control {
      min-height: 50px;
      width: calc(100% - 2px);
      border: 2px solid ${({ theme }: ThemeProps) => theme.color.gray700};

      ${transition('border-color 0.5s linear')}

      &:hover {
        box-shadow: none;
        border: 2px solid ${({ theme }: ThemeProps) => theme.color.gray700};
      }

      &--is-focused,
      &--menu-is-open {
        box-shadow: none;
        border-width: 2px;
        border-color: ${({ theme }: ThemeProps) => theme.color.blue700};

        &:hover {
          border-color: ${({ theme }: ThemeProps) => theme.color.blue700};
        }
      }

      ${({ isError }: IStyledWrapperProps) =>
        isError &&
        css`
          border-color: ${theme.color.red500};

          &:hover {
            border-color: ${theme.color.red500};
          }

          &--is-focused,
          &--menu-is-open {
            border-color: ${theme.color.red500};

            &:hover {
              border-color: ${theme.color.red500};
            }
          }
        `}
    }

    &__value-container {
      padding: 2px ${({ theme }: ThemeProps) => theme.paddingSmall}px;
    }

    &__multi-value {
      padding: 3px;
      font-size: ${getRem(20)};
      color: ${({ theme }: ThemeProps) => theme.color.blue800};
      background-color: ${({ theme }: ThemeProps) => theme.color.gray500};

      ${transition('background-color 0.5s linear')}

      &:hover {
        background-color: ${({ theme }: ThemeProps) => theme.color.gray300};
      }
    }

    &__multi-value__remove > svg {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
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
  color: ${({ theme }: ThemeProps) => theme.color.gray700};
  left: ${({ theme }: ThemeProps) => theme.paddingSmall}px;

  ${borderRadius('5px')}
  ${linearGradient(
    '180deg',
    `rgba(0, 0, 0, 0) 44%`,
    `${theme.color.white} 0`,
    `${theme.color.white} 100%`
  )}
  ${transition('all 0.5s linear')}

  ${({ isFocus, theme }: ThemeProps<IStyledSelectLabelProps>) =>
    isFocus &&
    css`
      color: ${theme.color.blue700};
    `}

  ${({ isError, theme}: ThemeProps<IStyledSelectLabelProps>) =>
    isError &&
    css`
      color: ${theme.color.red500};
    `}
`

export const StyledErrorLabel = styled.p`
  height: 20px;
  padding: 3px 0 0 23px;
  color: ${({ theme }: ThemeProps) => theme.color.red500};
`
