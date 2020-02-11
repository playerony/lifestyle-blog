import styled from 'styled-components'

import { ThemeProps } from '@admin/style/theme'

export const StyledWrapper = styled.div`
  padding: ${({ theme }: ThemeProps) => theme.variable.paddingBig}px;
`

export const StyledHeader = styled.h1`
  padding-bottom: ${({ theme }: ThemeProps) => theme.variable.paddingMedium}px;
`
