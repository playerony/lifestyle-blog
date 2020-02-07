import React from 'react'

import ImageUploader from '@component/common/ImageUploader'

import { IUploadInputProps } from './UploadInput.type'
import { IResult } from '@hook/article/useUploadMutation/useUploadMutation.type'

import useUploadMutation from '@hook/article/useUploadMutation'

const ACCEPT_TYPE = 'image/jpeg'

const UploadInput = ({ onChange }: IUploadInputProps): JSX.Element => {
  const uploadImage = useUploadMutation()

  const onUpload = (selectedFile: File): Promise<void> =>
    uploadImage(selectedFile)
      .then((result: IResult) => {
        onChange(result.imageId || null)
      })

  return (
    <ImageUploader
      onUpload={onUpload}
      accept={ACCEPT_TYPE}
    />
  )
}

export default UploadInput
