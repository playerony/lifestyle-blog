import styled from 'styled-components'

import { respondTo } from '@style/mixin'

export const StyledTooltip = styled.a`
  display: inline;
  position: relative;

  &:hover:after {
    background: #444;
    border-radius: 8px;
    color: #fff;
    content: attr(title);
    font-size: 16px;
    padding: 13px;
    position: absolute;
    z-index: 8;
    left: calc(-50% - 20px);
    top: -62px;

    ${respondTo.smallScreen`
      display: none;
    `}
  }

  &:hover:before {
    border: solid;
    border-color: #444 transparent;
    border-width: 8px 4px 0 4px;
    content: '';
    left: calc(50% - 8px);
    bottom: 30px;
    position: absolute;

    ${respondTo.smallScreen`
      display: none;
    `}
  }
`
