import { ReactElement, HTMLAttributes } from 'react'

export interface ITooltipProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactElement
}
