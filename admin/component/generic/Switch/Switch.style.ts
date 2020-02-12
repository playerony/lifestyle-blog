import styled, { css } from 'styled-components'

import variable from '@style/variable'
import { boxShadow, transition, borderRadius } from '@style/mixin'

interface IStyledWrapperProps {
  isChecked: boolean
}

export const StyledCircle = styled.div`
  top: 3px;
  left: 3px;
  width: 27px;
  height: 27px;
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
  background: ${variable.color.blue500};

  ${borderRadius('50px')}
  ${transition('background 500ms linear')}

  ${({ isChecked }: IStyledWrapperProps) =>
    isChecked &&
    css`
      background: ${variable.color.green400};

      & > ${StyledCircle} {
        left: 23px;
      }
    `}
`
