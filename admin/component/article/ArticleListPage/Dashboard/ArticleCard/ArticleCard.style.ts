import styled from 'styled-components'

import {
  flexbox,
  boxShadow,
  respondTo,
  alignItems,
  transition,
  borderRadius,
  flexDirection,
  linearGradient,
  justifyContent,
} from '@style/mixin'
import variable from '@style/variable'
import { ThemeProps } from '@style/theme'

export const StyledWrapper = styled.div`
  width: 95%;
  height: 500px;
  max-width: 600px;
  margin: 5px auto;

  background-color: ${({ theme }: ThemeProps) => theme.color.card};

  ${borderRadius('4px')}
  ${transition('background-color 500ms linear')}
  ${boxShadow('0 2px 8px 0 rgba(0, 0, 0, 0.16)')}

  ${respondTo.smallScreen`
    height: 450px;
  `}

  ${respondTo.mobileScreen`
    height: 350px;
  `}
`

export const StyledImage = styled.img`
  height: 50%;
  width: 100%;
  object-fit: cover;

  ${borderRadius('4px 4px 0 0')}
`

export const StyledContentWrapper = styled.section`
  padding: ${variable.paddingSmall}px;
  height: calc(50% - ${variable.paddingMedium}px);

  ${flexbox()}
  ${flexDirection('column')}
  ${justifyContent('space-between')}

  ${respondTo.mobileScreen`
    padding: ${variable.paddingSmall / 2}px;
    height: calc(50% - ${variable.paddingSmall}px);
  `}
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
  ${alignItems('center')}
  ${justifyContent('space-between')}
`

export const StyledVisitorContentWrapper = styled.div`
  ${flexbox()}

  p {
    margin-top: 2px;
    padding-right: 5px;

    ${respondTo.largeScreen`
      margin-top: 3px;
    `}

    ${respondTo.mediumScreen`
      margin-top: 5px;
    `}

    ${respondTo.smallScreen`
      margin-top: 6px;
    `}
  }
`

export const StyledEyeIcon = styled.svg`
  width: 25px;
  height: 23px;
  cursor: default;
  margin-right: 10px;

  fill: ${({ theme }: ThemeProps) => theme.color.icon};
`

export const StyledTodayVisitorLabel = styled.p`
  color: ${variable.color.green400};
`

export const StyledContentSection = styled.section`
  h1 {
    margin-bottom: 10px;
  }
`

export const StyledContentFooter = styled.footer`
  ${flexbox()}
  ${justifyContent('space-between')}
`

export const StyledCategoryIcon = styled.svg`
  width: 20px;
  height: 20px;
  cursor: default;
  margin-right: 10px;

  fill: ${({ theme }: ThemeProps) => theme.color.icon};
`

export const StyledControlIcon = styled.svg`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
  fill: ${({ theme }: ThemeProps) => theme.color.icon};

  ${transition('fill 500ms linear')}

  &:hover {
    fill: ${variable.color.blue700};
  }
`
