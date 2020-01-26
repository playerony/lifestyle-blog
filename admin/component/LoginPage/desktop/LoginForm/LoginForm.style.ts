import styled from 'styled-components'

import { StyledInputWrapper as Input } from '@component/generic/Input/Input.style'

import {
  borderRadius,
  boxShadow,
  transform,
  transition,
  flexbox,
  justifyContent
} from '@style/mixin'
import { ThemeProps } from '@style/theme'

export const StyledWrapper = styled.div`
  min-width: 500px;
  position: absolute;
  padding: ${({ theme }: ThemeProps<{}>) => theme.paddingMedium}px;
  padding-top: ${({ theme }: ThemeProps<{}>) => theme.paddingMedium - 5}px;
  padding-bottom: ${({ theme }: ThemeProps<{}>) => theme.paddingMedium - 23}px;
  background-color: ${({ theme }: ThemeProps<{}>) => theme.color.white};

  ${borderRadius('12px')}
  ${transform('translate(-50%, -50%)')}
  ${boxShadow('0 2px 8px 2px rgba(0, 0, 0, 0.16)')}
`

export const StyledHeader = styled.h1`
  padding-bottom: ${({ theme }: ThemeProps<{}>) => theme.paddingSmall}px;
`

export const StyledInputWrapper = styled.section`
  ${flexbox()}
  ${justifyContent('space-between')}

  & > ${Input} {
    width: 80%;
  }
`

export const StyledButton = styled.button`
  margin-top: 6px;
  min-width: 48px;
  max-width: 48px;
  min-height: 48px;
  max-height: 48px;
  border: 2px solid ${({ theme }: ThemeProps<{}>) => theme.color.gray700};

  ${borderRadius('50px')}
  ${transition('all 0.5s linear')}

  & > svg {
    width: 12px;
    height: 12px;
    fill: ${({ theme }: ThemeProps<{}>) => theme.color.gray700};

    ${transform('rotate(180deg)')}
    ${transition('all 0.5s linear')}
  }

  &:focus,
  &:hover {
    border-color: ${({ theme }: ThemeProps<{}>) => theme.color.blue700};

    & > svg {
      fill: ${({ theme }: ThemeProps<{}>) => theme.color.blue700};
    }
  }

  &:disabled {
    background-color: ${({ theme }: ThemeProps<{}>) => theme.color.gray500};

    &:focus,
    &:hover {
      border-color: ${({ theme }: ThemeProps<{}>) => theme.color.gray700};

      & > svg {
        fill: ${({ theme }: ThemeProps<{}>) => theme.color.gray700};
      }
    }
  }
`
