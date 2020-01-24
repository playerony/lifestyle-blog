import styled from 'styled-components'

import { ThemeProps } from '@style/theme'
import { flexbox, alignItems, justifyContent, transition } from '@style/mixin'

export const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }: ThemeProps<{}>) => theme.color.black};

  ${flexbox()}
  ${alignItems('center')}
  ${justifyContent('center')}
`

export const StyledAnimation = styled.div`
  .fade-appear {
    opacity: 0;
    z-index: 1;
  }
  .fade-appear.fade-appear-active {
    opacity: 1;
    ${transition('opacity 300ms linear')}
  }

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    ${transition('opacity 300ms linear')}
  }

  .fade-exit {
    opacity: 1;
    z-index: 0;
  }
  .fade-exit.fade-exit-active {
    opacity: 0;
    ${transition('opacity 300ms linear')}
  }
  .fade-exit-done {
    opacity: 0;
  }
`
