import styled, { css } from 'styled-components'

import variable from '@style/variable'
import { borderRadius, transition, linearGradient } from '@style/mixin'

interface IStyledWrapperProps {
  isError: boolean
  isFocus: boolean
}

export const StyledWrapper = styled.div<IStyledWrapperProps>`
  margin-top: 5px;
  min-height: 500px;
  position: relative;
  padding: ${variable.paddingSmall}px;
  background-color: ${variable.color.white};
  border: 2px solid ${variable.color.gray700};

  ${borderRadius('4px')}
  ${transition('all 0.5s linear')}

  ${({ isFocus }: IStyledWrapperProps) =>
    isFocus &&
    css`
      border-color: ${variable.color.blue700};
    `}

  ${({ isError }: IStyledWrapperProps) =>
    isError &&
    css`
      border-color: ${variable.color.red500};
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

  ${({ isFocus }: IStyledLabelProps) =>
    isFocus &&
    css`
      color: ${variable.color.blue700};
    `}

  ${({ isError }: IStyledLabelProps) =>
    isError &&
    css`
      color: ${variable.color.red500};
    `}
`

export const StyledEditorWrapper = styled.div`
  margin-top: ${variable.paddingSmall}px;

  .DraftEditor-root {
    min-height: 500px;
  }

  .DraftEditor-blockquote {
    font-style: italic;
    color: ${variable.color.gray400};
    margin: ${variable.paddingSmall}px 0;
    border-left: 5px solid ${variable.color.gray300};
    padding: ${variable.paddingSmall / 2}px ${variable.paddingSmall}px;
  }

  .public-DraftStyleDefault-ul {
    list-style: disc;
    margin-left: ${variable.paddingSmall}px;
  }

  .public-DraftStyleDefault-ol {
    list-style: decimal;
    margin-left: ${variable.paddingSmall}px;
  }

  .public-DraftStyleDefault-pre {
    padding: ${variable.paddingSmall}px;
    background-color: ${variable.color.gray300};
  }
`

export const StyledErrorLabel = styled.p`
  height: 20px;
  padding: 3px 0 0 23px;
  color: ${variable.color.red500};
`
