export interface IImageUploaderProps {
  imageUrl?: string
  accept: string
  errorMessage?: string
  onUpload: (file: File) => void
}
