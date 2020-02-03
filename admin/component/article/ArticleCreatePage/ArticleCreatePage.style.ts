import styled from 'styled-components'

import { ThemeProps } from '@style/theme'

export const StyledWrapper = styled.div`
  padding: ${({ theme }: ThemeProps) => theme.paddingBig}px;
`

export const StyledHeader = styled.h1`
  padding-bottom: ${({ theme }: ThemeProps) => theme.paddingMedium}px;
`
