export interface IControlButtonProps {
  label: string
  style: string
  active: boolean
  onToggle: (style: string) => void
}
