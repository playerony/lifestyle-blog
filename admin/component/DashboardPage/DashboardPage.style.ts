import styled from 'styled-components'

import {
    linearGradient,
    flexbox,
    justifyContent,
    alignItems
} from '@style/mixin'
import theme from '@style/theme'

export const LineItem = styled.div`
  width: 100%;
  height: 62px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
  background-color:white;
  ${flexbox()}
  ${alignItems('center')}
  ${justifyContent('center')}}
`

export const SquareItem = styled.div`
  width: 33%;
  height: 300px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
  background-color:white;
  ${flexbox()}
  ${alignItems('center')}
  ${justifyContent('center')}}
`

