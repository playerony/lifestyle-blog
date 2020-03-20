import styled from 'styled-components'

import variable from '@style/variable'
import { ThemeProps } from '@style/theme'
import { respondTo, borderRadius } from '@style/mixin'

interface IStyledTooltipProps {
  height?: number
}

export const StyledTooltip = styled.a<IStyledTooltipProps>`
  display: inline;
  position: relative;

  &:hover:after {
    left: -50%;
    z-index: 8;
    position: absolute;
    content: attr(title);
    padding: ${variable.paddingSmall / 2}px;
    color: ${({ theme }: ThemeProps) => theme.color.input};
    background: ${({ theme }: ThemeProps) => theme.color.text};
    top: ${({ height = 1 }: IStyledTooltipProps) => height * -1 - 32}px;

    ${borderRadius('4px')}

    ${respondTo.smallScreen`
      display: none;
    `}
  }

  &:hover:before {
    content: '';
    border: solid;
    position: absolute;
    left: calc(50% - 8px);
    border-width: 8px 4px 0 4px;
    bottom: ${({ height = 1 }: IStyledTooltipProps) => height + 8}px;
    border-color: ${({ theme }: ThemeProps) => theme.color.text} transparent;

    ${respondTo.smallScreen`
      display: none;
    `}
  }
`
