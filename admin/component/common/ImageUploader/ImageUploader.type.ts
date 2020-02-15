export interface IImageUploaderProps {
  imageUrl?: string
  errorMessage?: string
  accept: string
  onUpload: (file: File) => void
}
