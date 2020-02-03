export interface IImageUploaderProps {
  imageUrl?: string

  accept: string
  onUpload: (file: File) => void  
}
