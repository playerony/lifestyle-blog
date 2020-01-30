import React, { useState, useEffect, ChangeEvent } from 'react'

import Input from '@component/generic/Input'

import uploadMutation from '@hook/ArticlePage/useUploadMutation'

const IMAGE_TYPES = ['image/jpeg', 'image/png']

const UploadInput = (): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File>()
  const [errorMessage, setErrorMessage] = useState<string>('')

  const upload = uploadMutation()

  useEffect(() => {
    if (selectedFile) {
      upload(selectedFile)
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
        setErrorMessage('Unsupported format. Please upload jpg/png file.')
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
