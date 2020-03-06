export interface ICategorySelectProps {
  value?: string[]
  errorMessage?: string
  onChange: (categoryIdList: number[]) => void
}
