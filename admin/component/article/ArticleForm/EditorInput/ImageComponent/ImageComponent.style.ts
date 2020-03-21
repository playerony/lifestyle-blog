import styled from 'styled-components'

import { flexbox, justifyContent } from '@style/mixin'

export const StyledWrapper = styled.div`
  ${flexbox()}
  ${justifyContent('center')}
`

export const StyledImage = styled.img`
  max-width: 100%;
`
