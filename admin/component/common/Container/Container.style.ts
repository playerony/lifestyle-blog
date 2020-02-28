import styled from 'styled-components'

import variable from '@style/variable'

export const StyledContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  position: relative;
  padding: ${variable.paddingBig}px;
  max-width: ${variable.breakpoint.mediumScreen}px;
  width: calc(100% - ${variable.paddingBig * 2}px);
`
