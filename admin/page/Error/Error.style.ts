import styled from 'styled-components'

import {
  flexbox,
  respondTo,
  transition,
  alignItems,
  flexDirection,
  justifyContent
} from '@style/mixin'
import variable from '@style/variable'
import getRem from '@style/helper/getRem'

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;

  ${flexbox()}
  ${alignItems('center')}
  ${flexDirection('column')}
  ${justifyContent('center')}
`

export const StyledCode = styled.h1`
  font-size: ${getRem(100)};
  padding-top: ${variable.paddingMedium}px;

  ${transition('color 500ms linear')}

  ${respondTo.largeScreen`
    font-size: ${getRem(90)};
  `}

  ${respondTo.mediumScreen`
    font-size: ${getRem(75)};
  `}

  ${respondTo.smallScreen`
    font-size: ${getRem(50)};
  `}

  ${respondTo.mobileScreen`
    font-size: ${getRem(45)};
  `}
`

export const StyledDescription = styled.label`
  padding-bottom: ${variable.paddingMedium}px;

  ${respondTo.smallScreen`
    padding-bottom: ${variable.paddingSmall}px;
  `}
`
