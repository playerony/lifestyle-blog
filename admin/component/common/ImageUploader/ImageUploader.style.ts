import styled, { css } from 'styled-components'

import {
  flexbox,
  respondTo,
  boxShadow,
  alignItems,
  transition,
  borderRadius,
  flexDirection,
  justifyContent
} from '@style/mixin'
import variable from '@style/variable'
import getRem from '@style/helper/getRem'

export const StyledWrapper = styled.div`
  width: 100%;
  position: relative;

  ${flexbox()}
  ${alignItems('center')}
  ${flexDirection('column')}
`

export const StyledInput = styled.input`
  display: none;
`

interface IStyledContentWrapperProps {
  isError: boolean
}

export const StyledContentWrapper = styled.div<IStyledContentWrapperProps>`
  width: 100%;
  max-width: 750px;
  background-color: ${variable.color.white};

  ${borderRadius('4px')}
  ${boxShadow('0 2px 8px 0 rgba(0, 0, 0, 0.16)')}

  ${respondTo.mediumScreen`
    max-width: 450px;
  `}

  ${respondTo.smallScreen`
    max-width: 400px;
  `}

  ${respondTo.mobileScreen`
    max-width: 350px;
  `}

  ${({ isError }: IStyledContentWrapperProps) =>
    isError &&
    css`
      border: 2px solid ${variable.color.red500};
    `}
`

export const StyledImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;

  ${borderRadius('4px 4px 0 0')}

  ${respondTo.mediumScreen`
    height: 275px;
  `}

  ${respondTo.smallScreen`
    height: 200px;
  `}

  ${respondTo.mobileScreen`
    height: 150px;
  `}
`

export const StyledButton = styled.div`
  width: 100%;
  height: 75px;
  cursor: pointer;
  font-size: ${getRem(32)};
  color: ${variable.color.white};
  background-color: ${variable.color.green400};

  ${flexbox()}
  ${alignItems('center')}
  ${justifyContent('center')}
  ${borderRadius('0 0 4px 4px')}
  ${transition('background-color 0.5s linear')}

  ${respondTo.smallScreen`
    height: 65px;
    font-size: ${getRem(30)};
  `}

  ${respondTo.mobileScreen`
    height: 50px;
    font-size: ${getRem(28)};
  `}

  &:hover {
    background-color: ${variable.color.blue500};
  }
`

export const StyledErrorLabel = styled.p`
  height: 20px;
  padding: 3px 0 0 23px;
  color: ${variable.color.red500};
`
