import styled from 'styled-components'

import { transition } from '../mixin'

export default styled.div`
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
