import styled, { css } from 'styled-components'

import {
  flexbox,
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
  max-width: 500px;
  background-color: ${variable.color.white};

  ${borderRadius('4px')}
  ${boxShadow('0 2px 8px 0 rgba(0, 0, 0, 0.16)')}

  ${({ isError }: IStyledContentWrapperProps) =>
    isError &&
    css`
      border: 4px solid ${variable.color.red500};
    `}
`

export const StyledImage = styled.img`
  width: 100%;
  height: 275px;
  object-fit: cover;

  ${borderRadius('4px 4px 0 0')}
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

  &:hover {
    background-color: ${variable.color.blue500};
  }
`

export const StyledErrorLabel = styled.p`
  height: 20px;
  padding: 3px 0 0 23px;
  color: ${variable.color.red500};
`
