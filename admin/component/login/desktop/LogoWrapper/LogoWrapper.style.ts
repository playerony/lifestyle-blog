import styled from 'styled-components'

import {
  borderRadius,
  boxShadow,
  transform,
  flexbox,
  alignItems,
  justifyContent
} from '@style/mixin'
import { ThemeProps } from '@style/theme'

export const StyledWrapper = styled.div`
  min-width: 500px;
  position: absolute;
  padding: ${({ theme }: ThemeProps) =>
    `${theme.variable.paddingBig}px ${theme.variable.paddingMedium}px`};
  background-color: ${({ theme }: ThemeProps) => theme.variable.color.white};

  ${flexbox()}
  ${alignItems('center')}
  ${justifyContent('center')}

  ${borderRadius('12px')}
  ${transform('translate(-50%, -50%)')}
  ${boxShadow('0 2px 8px 2px rgba(0, 0, 0, 0.16)')}
`
