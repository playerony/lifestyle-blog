export interface IUploadInputProps {
  imageUrl?: string
  errorMessage?: string
  onChange: (imageId: number | null) => void
}
