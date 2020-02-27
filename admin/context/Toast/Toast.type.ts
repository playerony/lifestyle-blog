import EToastType from '@type/common/EToastType'

export interface IToastProps {
  add: (message: string, type?: EToastType) => void
}
