import styled from 'styled-components'

import variable from '@style/variable'
import { transition, transform, respondTo } from '@style/mixin'

export const StyledWrapper = styled.ul`
  position: fixed;
  pointer-events: none;
  right: ${variable.paddingBig}px;
  bottom: ${variable.paddingBig}px;

  ${respondTo.mediumScreen`
    right: ${variable.paddingMedium}px;
    bottom: ${variable.paddingMedium}px;
  `}

  ${respondTo.smallScreen`
    right: ${variable.paddingSmall}px;
    bottom: ${variable.paddingSmall}px;
  `}

  ${respondTo.mobileScreen`
    right: ${variable.paddingSmall / 2}px;
    bottom: ${variable.paddingSmall / 2}px;
  `}
`

interface IStyledElementProps {
  index: number
  isVisible: boolean
}

export const StyledElement = styled.li<IStyledElementProps>`
  display: block;
  pointer-events: all;
  margin-bottom: ${variable.paddingSmall}px;

  ${transition('all 300ms linear')}

  ${({ index, isVisible }: IStyledElementProps) =>
    transform(
      `translateY(${
        isVisible
          ? 0
          : `calc(${index * variable.paddingSmall}px + ${100 * index}%)`
      }) scale(0.9)`
    )}
    
  ${respondTo.mediumScreen`
    margin-bottom: ${variable.paddingSmall / 2}px;

    ${({ index, isVisible }: IStyledElementProps) =>
      transform(
        `translateY(${
          isVisible
            ? 0
            : `calc(${(index * variable.paddingSmall) / 2}px + ${100 * index}%)`
        }) scale(0.8)`
      )}
  `}
`
