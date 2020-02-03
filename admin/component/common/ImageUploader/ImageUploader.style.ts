import styled from 'styled-components'

import {
  flexbox,
  boxShadow,
  alignItems,
  borderRadius,
  justifyContent
} from '@style/mixin'
import getRem from '@style/helper/getRem'
import { ThemeProps } from '@style/theme'

export const StyledWrapper = styled.div`
  width: 100%;
  position: relative;

  ${flexbox()}
  ${justifyContent('center')}
`

export const StyledInput = styled.input`
  display: none;
`

export const StyledContentWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }: ThemeProps) => theme.color.white};

  ${borderRadius('4px')}
  ${boxShadow('0 2px 8px 0 rgba(0, 0, 0, 0.16)')}
`

export const StyledImage = styled.img`
  width: 100%;
  height: 275px;
  outline : none;
  object-fit: cover;
`

export const StyledButton = styled.div`
  width: 100%;
  height: 75px;
  cursor: pointer;
  font-size: ${getRem(32)};

  ${flexbox()}
  ${alignItems('center')}
  ${justifyContent('center')}
`
