import styled, { css } from 'styled-components'

import variable from '@style/variable'
import { transition } from '@style/mixin'

interface IStyledButton {
  active: boolean
}

export const StyledButton = styled.label<IStyledButton>`
  cursor: pointer;
  margin-bottom: 5px;
  margin-right: ${variable.paddingSmall}px;

  ${transition('color 500ms linear')}

  ${({ active }: IStyledButton) =>
    active &&
    css`
      color: ${variable.color.gray700};
    `}
`
