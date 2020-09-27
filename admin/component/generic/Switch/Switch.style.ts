import styled, { css } from 'styled-components'

import variable from '@style/variable'
import { boxShadow, transition, borderRadius } from '@style/mixin'

interface IStyledWrapperProps {
  isChecked: boolean
}

export const StyledCircle = styled.div`
  top: 2px;
  left: 2px;
  width: 28px;
  height: 28px;
  position: relative;
  background: ${variable.color.white};

  ${borderRadius('50px')}
  ${transition('all 500ms')}
  ${boxShadow(`
    0 3px 1px 0 rgba(0, 0, 0, 0.1),
    0 1px 1px 0 rgba(0, 0, 0, 0.16),
    0 3px 8px 0 rgba(0, 0, 0, 0.15)
  `)}
`

export const StyledWrapper = styled.div<IStyledWrapperProps>`
  width: 52px;
  height: 32px;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  background: ${variable.color.purple700};

  ${borderRadius('50px')}
  ${transition('background 500ms linear')}

  ${({ isChecked }: IStyledWrapperProps) =>
    isChecked &&
    css`
      background: ${variable.color.red300};

      & > ${StyledCircle} {
        left: 22px;
      }
    `}
`
