import React, { useRef } from 'react'

import { ITooltipProps } from './Tooltip.type'

import { StyledTooltip } from './Tooltip.style'

const Tooltip = ({ children, ...restProps }: ITooltipProps): JSX.Element => {
  const tooltipRef = useRef<HTMLAnchorElement | null>(null)

  const getContentHeight = (): number | undefined =>
    tooltipRef?.current?.firstElementChild?.clientHeight

  return (
    <StyledTooltip {...restProps} ref={tooltipRef} height={getContentHeight()}>
      {children}
    </StyledTooltip>
  )
}

export default Tooltip