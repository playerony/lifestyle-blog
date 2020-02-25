import styled from 'styled-components'

import variable from '@style/variable'
import { transition, transform } from '@style/mixin'

export const StyledWrapper = styled.ul`
  position: fixed;
  right: ${variable.paddingSmall}px;
  bottom: ${variable.paddingSmall}px;
`

interface IStyledMenuElementProps {
  index: number
  isVisible: boolean
}

export const StyledElement = styled.li<IStyledMenuElementProps>`
  display: block;
  margin-bottom: ${variable.paddingSmall}px;

  ${transition('all 300ms linear')}

  ${({ index, isVisible }: IStyledMenuElementProps) =>
    transform(
      `translateY(${
        isVisible ? 0 : `calc(${index * variable.paddingSmall}px + ${100 * index}%)`
      }) scale(0.9)`
    )}
`
