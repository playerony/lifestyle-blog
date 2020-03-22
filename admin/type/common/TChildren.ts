import { ReactNode } from 'react'

type TChildren = Array<Exclude<ReactNode, boolean | null | undefined>>

export default TChildren
