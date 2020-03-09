import React, { useState, useEffect } from 'react'

import ImageUploader from '@component/common/ImageUploader'

import EToastType from '@type/common/EToastType'
import { IUploadInputProps } from './UploadInput.type'

import useToast from '@hook/utility/useToast'
import useUploadMutation from '@hook/article/useUploadMutation'

import {
  IMAGE_ACCEPT_TYPE,
  IMAGE_UPLOAD_START_MESSAGE,
  IMAGE_UPLOAD_ERROR_MESSAGE,
  IMAGE_UPLOAD_SUCCESS_MESSAGE
} from '@config/constant'

const UploadInput = ({
  imageUrl,
  onChange,
  errorMessage: error,
}: IUploadInputProps): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(error)

  const toast = useToast()
  const uploadImage = useUploadMutation()

  useEffect(() => {
    setErrorMessage(error)

    if (error) {
      toast.add(error, EToastType.ERROR)
    }
  }, [error])

  const onUpload = async (selectedFile: File): Promise<void> => {
    toast.add(IMAGE_UPLOAD_START_MESSAGE, EToastType.INFO)
    const result = await uploadImage(selectedFile)

    if (!result) {
      return
    }

    const isError = Boolean(result.errors)

    if (!isError) {
      const imageId = result.data?.uploadImage?.imageId

      if (!imageId) {
        setErrorMessage(IMAGE_UPLOAD_ERROR_MESSAGE)
        toast.add(IMAGE_UPLOAD_ERROR_MESSAGE, EToastType.ERROR)
      } else {
        onChange(imageId)
        toast.add(IMAGE_UPLOAD_SUCCESS_MESSAGE)
      }
    } else {
      toast.add(IMAGE_UPLOAD_ERROR_MESSAGE, EToastType.ERROR)
    }

    setErrorMessage(isError ? IMAGE_UPLOAD_ERROR_MESSAGE : '')
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
