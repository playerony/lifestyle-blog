import React, { useState, useEffect, ChangeEvent } from 'react'

import Input from '@component/generic/Input'

import { IUploadInputProps } from './UploadInput.type'
import { IResult } from '@hook/article/useUploadMutation/useUploadMutation.type'

import useUploadMutation from '@hook/article/useUploadMutation'

const IMAGE_TYPES = ['image/jpeg']

const UploadInput = ({ onChange }: IUploadInputProps): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File>()
  const [errorMessage, setErrorMessage] = useState<string>('')

  const uploadImage = useUploadMutation()

  useEffect(() => {
    if (selectedFile) {
      uploadImage(selectedFile)
        .then((result: { uploadImage: IResult }) =>
          onChange(result.uploadImage.imageId || null)
        )
    }
  }, [selectedFile])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist()

    const reader: FileReader = new FileReader();

    let file: File
    if (event?.target?.files) {
      file = event.target.files[0]
    } else {
      setErrorMessage('You should choose at least on file')

      return
    }

    reader.onloadend = () => {
      if (IMAGE_TYPES.includes(file.type)) {
        setErrorMessage('')
        setSelectedFile(file)
      } else {
        setErrorMessage('Unsupported format. Please upload jpg file.')
      }
    }

    reader.readAsDataURL(file);
  }

  return (
    <Input
      type="file"
      label="File Upload"
      errorMessage={errorMessage}
      onChange={handleInputChange}
    />
  )
}

export default React.memo(UploadInput)
