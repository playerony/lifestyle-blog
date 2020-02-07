import React, { useState } from 'react'

import ImageUploader from '@component/common/ImageUploader'

import { IUploadInputProps } from './UploadInput.type'

import useUploadMutation from '@hook/article/useUploadMutation'

const ACCEPT_TYPE = 'image/jpeg'
const ERROR_MESSAGE = 'Something went wrong.'

const UploadInput = ({ imageUrl, onChange }: IUploadInputProps): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState<string>('')

  const uploadImage = useUploadMutation()

  const onUpload = async (selectedFile: File): Promise<void> => {
    const result = await uploadImage(selectedFile)

    if (!result) {
      return
    }

    if (!Boolean(result.errors)) {
      const imageId = result.data?.uploadImage?.imageId

      if (!imageId) {
        setErrorMessage(ERROR_MESSAGE)
      } else {
        onChange(imageId)
      }
    }

    setErrorMessage(Boolean(result.errors) ? ERROR_MESSAGE : '')
  }

  return (
    <ImageUploader
      imageUrl={imageUrl}
      onUpload={onUpload}
      accept={ACCEPT_TYPE}
      errorMessage={errorMessage}
    />
  )
}

export default UploadInput
