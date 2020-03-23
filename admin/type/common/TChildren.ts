import { ReactNode } from 'react'

type TChildren =
  | Exclude<ReactNode, boolean | null | undefined>
  | Array<Exclude<ReactNode, boolean | null | undefined>>

export default TChildren
