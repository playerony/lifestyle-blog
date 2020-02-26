export interface IToastContextProps {
  remove: (toastId: number) => void
  add: (message: string, type: string) => void
}
