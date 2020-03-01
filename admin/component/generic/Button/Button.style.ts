import styled, { css } from 'styled-components'

import { IButtonProps } from './Button.type'

import {
  flexbox,
  respondTo,
  alignItems,
  transition,
  borderRadius,
  justifyContent
} from '@style/mixin'
import variable from '@style/variable'
import getRem from '@style/helper/getRem'

export const StyledButton = styled.button<IButtonProps>`
  width: 100%;
  cursor: pointer;
  max-width: 500px;
  position: relative;
  font-size: ${getRem(32)};
  color: ${variable.color.white};
  background-color: ${variable.color.green400};

  ${flexbox()}
  ${borderRadius('4px')}
  ${alignItems('center')}
  ${justifyContent('center')}
  ${transition('background-color 0.5s linear')}

  ${({ marginTop }: IButtonProps) =>
    marginTop &&
    css`
      margin-top: ${variable.paddingSmall}px;
    `}
    
  ${({ circle }: IButtonProps) =>
    Boolean(circle) &&
    css`
      width: 140px;
      height: 140px;

      ${respondTo.largeScreen`
        width: 120px;
        height: 120px;
      `}

      ${respondTo.mediumScreen`
        width: 100px;
        height: 100px;
      `}

      ${respondTo.smallScreen`
        width: 90px;
        height: 90px;
      `}

      ${respondTo.mobileScreen`
        width: 80px;
        height: 80px;
      `}

      ${borderRadius('50px')}
    `}

  ${({ floating }: IButtonProps) =>
    Boolean(floating) &&
    css`
      position: fixed;
      bottom: ${variable.paddingBig}px;
      ${`${floating}: `}${variable.paddingBig}px;

      ${respondTo.mediumScreen`
        bottom: ${variable.paddingMedium}px;
        ${`${floating}: `}${variable.paddingMedium}px;
      `}

      ${respondTo.smallScreen`
        bottom: ${variable.paddingSmall}px;
        ${`${floating}: `}${variable.paddingSmall}px;
      `}

      ${respondTo.mobileScreen`
        bottom: ${variable.paddingSmall / 2}px;
        ${`${floating}: `}${variable.paddingSmall / 2}px;
      `}
    `}

  &:hover {
    background-color: ${variable.color.blue500};
  }

  &:disabled {
    background-color: ${variable.color.gray500};

    &:focus,
    &:hover {
      background-color: ${variable.color.gray500};
    }
  }
`
