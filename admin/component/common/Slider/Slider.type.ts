import { ReactElement } from 'react'
import { Settings } from 'react-slick'

export interface ISliderProps extends Settings {
  children: string | ReactElement | ReactElement[]
}
