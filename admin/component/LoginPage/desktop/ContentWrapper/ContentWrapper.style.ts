import styled from 'styled-components'

import { ThemeProps } from '@style/theme'
import { borderRadius, boxShadow } from '@style/mixin'

export const StyledWrapper = styled.div`
  min-width: 500px;
  padding: ${({ theme }: ThemeProps<{}>) => theme.paddingMedium}px;
  padding-top: ${({ theme }: ThemeProps<{}>) => theme.paddingMedium - 5}px;
  padding-bottom: ${({ theme }: ThemeProps<{}>) => theme.paddingMedium - 23}px;
  background-color: ${({ theme }: ThemeProps<{}>) => theme.color.white};
  ${borderRadius('12px')}
  ${boxShadow('0 2px 8px 2px rgba(0, 0, 0, 0.16)')}
`
