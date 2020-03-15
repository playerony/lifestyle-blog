import styled from 'styled-components'

import {
  flexbox,
  boxShadow,
  transform,
  alignItems,
  transition,
  borderRadius,
  justifyContent
} from '@style/mixin'
import variable from '@style/variable'
import { ThemeProps } from '@style/theme'

export const StyledWrapper = styled.div`
  min-width: 500px;
  position: absolute;
  background-color: ${({ theme }: ThemeProps) => theme.color.card};
  padding: ${`${variable.paddingBig}px ${variable.paddingMedium}px`};

  ${flexbox()}
  ${alignItems('center')}
  ${borderRadius('12px')}
  ${justifyContent('center')}
  ${transition('all 0.5s linear')}
  ${transform('translate(-50%, -50%)')}
  ${boxShadow('0 2px 8px 2px rgba(0, 0, 0, 0.16)')}
`
