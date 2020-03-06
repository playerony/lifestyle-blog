import React, { useState, useEffect } from 'react'

import ImageUploader from '@component/common/ImageUploader'

import { IUploadInputProps } from './UploadInput.type'

import useUploadMutation from '@hook/article/useUploadMutation'

import { IMAGE_ACCEPT_TYPE, IMAGE_UPLOAD_ERROR_MESSAGE } from '@config/constant'

const UploadInput = ({
  imageUrl,
  onChange,
  errorMessage: error,
}: IUploadInputProps): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(error)

  useEffect(() => { setErrorMessage(error) }, [error])

  const uploadImage = useUploadMutation()

  const onUpload = async (selectedFile: File): Promise<void> => {
    const result = await uploadImage(selectedFile)

    if (!result) {
      return
    }

    if (!Boolean(result.errors)) {
      const imageId = result.data?.uploadImage?.imageId

      if (!imageId) {
        setErrorMessage(IMAGE_UPLOAD_ERROR_MESSAGE)
      } else {
        onChange(imageId)
      }
    }

    setErrorMessage(Boolean(result.errors) ? IMAGE_UPLOAD_ERROR_MESSAGE : '')
  }

  return (
    <ImageUploader
      imageUrl={imageUrl}
      onUpload={onUpload}
      accept={IMAGE_ACCEPT_TYPE}
      errorMessage={errorMessage}
    />
  )
}

export default UploadInput
