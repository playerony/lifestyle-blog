import styled from 'styled-components'

import { ThemeProps } from '@style/theme'
import { respondTo } from '@style/mixin'
import variable from '@style/variable'

export const StyledTooltip = styled.a`
  display: inline;
  position: relative;

  &:hover:after {
    top: -56px;
    z-index: 8;
    border-radius: 8px;
    content: attr(title);
    position: absolute;
    left: calc(-50% - 20px);
    padding: ${variable.paddingSmall / 2}px;
    color: ${({ theme }: ThemeProps) => theme.color.input};
    background: ${({ theme }: ThemeProps) => theme.color.text};

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
