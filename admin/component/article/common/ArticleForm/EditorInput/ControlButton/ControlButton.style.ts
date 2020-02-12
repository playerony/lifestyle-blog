import styled, { css } from 'styled-components'

import variable from '@style/variable'
import { transition } from '@style/mixin'

interface IStyledButton {
  active: boolean
}

export const StyledButton = styled.label<IStyledButton>`
  cursor: pointer;
  margin-bottom: 5px;
  color: ${variable.color.black};
  margin-right: ${variable.paddingSmall}px;

  ${transition('color 0.5s linear')}

  ${({ active }: IStyledButton) =>
    active &&
    css`
      color: ${variable.color.gray700};
    `}
`
