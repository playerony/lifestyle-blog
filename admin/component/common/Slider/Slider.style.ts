import styled from 'styled-components'

import { ThemeProps } from '@style/theme'

export const StyledWrapper = styled.div`
  .slick-next,
  .slick-prev {
    ::before {
      color: ${({ theme }: ThemeProps) => theme.color.icon};
    }
  }
`
