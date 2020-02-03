import React, { useRef, useState, useEffect, ChangeEvent } from 'react'

import { IUploadInputProps } from './UploadInput.type'
import { IResult } from '@hook/article/useUploadMutation/useUploadMutation.type'

import useUploadMutation from '@hook/article/useUploadMutation'

import {
  StyledInput,
  StyledImage,
  StyledButton,
  StyledWrapper,
  StyledContentWrapper
} from './UploadInput.style'

import defaultImage from '@asset/image/default.jpg'

const ACCEPT_TYPE = 'image/jpeg'

const UploadInput = ({ onChange }: IUploadInputProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [selectedFile, setSelectedFile] = useState<File>()
  const [previewContent, setPreviewContent] = useState<string>(defaultImage)

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
      return
    }

    reader.onloadend = () => {
      if (ACCEPT_TYPE === file.type) {
        setSelectedFile(file)
        setPreviewContent(String(reader.result))
      }
    }

    reader.readAsDataURL(file);
  }

  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <StyledImage src={previewContent} />
        <StyledButton onClick={() => inputRef.current?.click()}>+</StyledButton>
      </StyledContentWrapper>
      <StyledInput
        type="file"
        ref={inputRef}
        accept={ACCEPT_TYPE}
        onChange={handleInputChange}
      />
    </StyledWrapper>
  )
}

export default React.memo(UploadInput)
