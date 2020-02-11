import styled, { css } from 'styled-components'

import { ThemeProps } from '@admin/style/theme'
import { borderRadius, transition, linearGradient } from '@style/mixin'

interface IStyledWrapperProps {
  isError: boolean
  isFocus: boolean
}

export const StyledWrapper = styled.div<IStyledWrapperProps>`
  margin-top: 5px;
  min-height: 500px;
  position: relative;
  padding: ${({ theme }: ThemeProps) => theme.variable.paddingSmall}px;
  background-color: ${({ theme }: ThemeProps) => theme.variable.color.white};
  border: 2px solid ${({ theme }: ThemeProps) => theme.variable.color.gray700};

  ${borderRadius('4px')}
  ${transition('all 0.5s linear')}

  ${({ isFocus, theme }: ThemeProps<IStyledWrapperProps>) =>
    isFocus &&
    css`
      border-color: ${theme.variable.color.blue700};
    `}

  ${({ isError, theme }: ThemeProps<IStyledWrapperProps>) =>
    isError &&
    css`
      border-color: ${theme.variable.color.red500};
    `}
`

interface IStyledLabelProps {
  isError: boolean
  isFocus: boolean
}

export const StyledLabel = styled.p<IStyledLabelProps>`
  top: -12px;
  padding: 3px;
  position: absolute;
  left: ${({ theme }: ThemeProps) => theme.variable.paddingSmall}px;
  color: ${({ theme }: ThemeProps) => theme.variable.color.gray700};

  ${borderRadius('5px')}
  ${transition('all 0.5s linear')}
  
  ${({ theme }: ThemeProps) => linearGradient(
    '180deg',
    `rgba(0, 0, 0, 0) 44%`,
    `${theme.variable.color.white} 0`,
    `${theme.variable.color.white} 100%`
  )}

  ${({ isFocus, theme }: ThemeProps<IStyledLabelProps>) =>
    isFocus &&
    css`
      color: ${theme.variable.color.blue700};
    `}

  ${({ isError, theme }: ThemeProps<IStyledLabelProps>) =>
    isError &&
    css`
      color: ${theme.variable.color.red500};
    `}
`

export const StyledEditorWrapper = styled.div`
  margin-top: ${({ theme }: ThemeProps) => theme.variable.paddingSmall}px;

  .DraftEditor-root {
    min-height: 500px;
  }

  .DraftEditor-blockquote {
    font-style: italic;
    color: ${({ theme }: ThemeProps) => theme.variable.color.gray400};
    margin: ${({ theme }: ThemeProps) => theme.variable.paddingSmall}px 0;
    border-left: 5px solid ${({ theme }: ThemeProps) => theme.variable.color.gray300};
    padding: ${({ theme }: ThemeProps) => theme.variable.paddingSmall / 2}px
      ${({ theme }: ThemeProps) => theme.variable.paddingSmall}px;
  }

  .public-DraftStyleDefault-ul {
    list-style: disc;
    margin-left: ${({ theme }: ThemeProps) => theme.variable.paddingSmall}px;
  }

  .public-DraftStyleDefault-ol {
    list-style: decimal;
    margin-left: ${({ theme }: ThemeProps) => theme.variable.paddingSmall}px;
  }

  .public-DraftStyleDefault-pre {
    padding: ${({ theme }: ThemeProps) => theme.variable.paddingSmall}px;
    background-color: ${({ theme }: ThemeProps) => theme.variable.color.gray300};
  }
`

export const StyledErrorLabel = styled.p`
  height: 20px;
  padding: 3px 0 0 23px;
  color: ${({ theme }: ThemeProps) => theme.variable.color.red500};
`
