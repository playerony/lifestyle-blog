import styled from 'styled-components'

import { borderRadius, transition, linearGradient } from '@style/mixin'
import theme, { ThemeProps } from '@style/theme'

export const StyledWrapper = styled.div`
  margin-top: 5px;
  position: relative;
  padding: ${({ theme }: ThemeProps) => theme.paddingSmall}px;
  background-color: ${({ theme }: ThemeProps) => theme.color.white};
  border: 2px solid ${({ theme }: ThemeProps) => theme.color.gray700};

  ${borderRadius('4px')}
`

export const StyledLabel = styled.p`
  position: absolute;
  top: -12px;
  padding: 3px;
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
`

export const StyledEditorWrapper = styled.div`
  margin-top: ${({ theme }: ThemeProps) => theme.paddingSmall}px;

  .DraftEditor-blockquote {
    font-style: italic;
    color: ${({ theme }: ThemeProps) => theme.color.gray400};
    margin: ${({ theme }: ThemeProps) => theme.paddingSmall}px 0;
    border-left: 5px solid ${({ theme }: ThemeProps) => theme.color.gray300};
    padding: ${({ theme }: ThemeProps) => theme.paddingSmall / 2}px
      ${({ theme }: ThemeProps) => theme.paddingSmall}px;
  }

  .public-DraftStyleDefault-ul {
    list-style: disc;
    margin-left: ${({ theme }: ThemeProps) => theme.paddingSmall}px;
  }

  .public-DraftStyleDefault-ol {
    list-style: decimal;
    margin-left: ${({ theme }: ThemeProps) => theme.paddingSmall}px;
  }

  .public-DraftStyleDefault-pre {
    padding: ${({ theme }: ThemeProps) => theme.paddingSmall}px;
    background-color: ${({ theme }: ThemeProps) => theme.color.gray300};
  }
`
