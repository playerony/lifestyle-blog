import React from 'react'

import { ITooltipProps } from './Tooltip.type'

import { StyledTooltip } from './Tooltip.style'

const Tooltip = ({ children, ...restProps }: ITooltipProps): JSX.Element => (
  <StyledTooltip {...restProps}>
    {children}
  </StyledTooltip>
)

export default Tooltip