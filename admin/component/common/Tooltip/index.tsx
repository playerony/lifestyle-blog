import React from 'react'

import { ITooltipProps } from './Tooltip.type'

const Tooltip = ({ children, ...restProps }: ITooltipProps): JSX.Element => (
  <a {...restProps}>
    {children}
  </a>
)

export default Tooltip