export default interface IControlButton {
  label: string
  active: boolean
  style: string
  onToggle: (style: string) => void
}
