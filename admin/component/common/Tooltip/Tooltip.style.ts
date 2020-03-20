import styled from 'styled-components'

import { ThemeProps } from '@style/theme'
import { respondTo, borderRadius } from '@style/mixin'
import variable from '@style/variable'

export const StyledTooltip = styled.a`
  display: inline;
  position: relative;

  &:hover:after {
    left: -50%;
    top: -56px;
    z-index: 8;
    position: absolute;
    content: attr(title);
    padding: ${variable.paddingSmall / 2}px;
    color: ${({ theme }: ThemeProps) => theme.color.input};
    background: ${({ theme }: ThemeProps) => theme.color.text};

    ${borderRadius('4px')}

    ${respondTo.smallScreen`
      display: none;
    `}
  }

  &:hover:before {
    content: '';
    bottom: 30px;
    border: solid;
    position: absolute;
    left: calc(50% - 8px);
    border-width: 8px 4px 0 4px;
    border-color: ${({ theme }: ThemeProps) => theme.color.text} transparent;

    ${respondTo.smallScreen`
      display: none;
    `}
  }
`
