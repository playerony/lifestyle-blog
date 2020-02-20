import styled from 'styled-components'

import {
  flexbox,
  boxShadow,
  alignItems,
  transition,
  borderRadius,
  linearGradient,
  justifyContent
} from '@style/mixin'
import variable from '@style/variable'
import { ThemeProps } from '@style/theme'

export const StyledWrapper = styled.div`
  margin: 20px;
  height: 400px;
  max-width: 350px;

  background-color: ${({ theme }: ThemeProps) => theme.color.card};

  ${borderRadius('4px')}
  ${transition('background-color 500ms linear')}
  ${boxShadow('0 2px 8px 0 rgba(0, 0, 0, 0.16)')}
`

export const StyledImage = styled.img`
  height: 50%;
  width: 100%;
  object-fit: cover;
`

export const StyledContentWrapper = styled.section`
  padding: ${variable.paddingSmall}px;
`

export const StyledArticleNumber = styled.p`
  ${flexbox()}
  ${alignItems('center')}

  ::before {
    width: 6px;
    height: 6px;
    content: '';
    margin-right: 10px;

    ${flexbox()}
    ${borderRadius('50px')}
    ${linearGradient(
      'to bottom',
      variable.color.green400,
      variable.color.blue700
    )}
  }
`

export const StyledContentHeader = styled.header`
  ${flexbox()}
  ${justifyContent('space-between')}
`
