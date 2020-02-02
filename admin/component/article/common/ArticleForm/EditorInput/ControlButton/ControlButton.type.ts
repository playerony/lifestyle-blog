export interface IControlButtonProps {
  label: string
  active: boolean
  style: string
  onToggle: (style: string) => void
}
