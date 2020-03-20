import { ReactElement, HTMLAttributes } from 'react'

export interface ITooltipProps extends HTMLAttributes<HTMLAnchorElement> {
  title: string
  children: ReactElement
}
