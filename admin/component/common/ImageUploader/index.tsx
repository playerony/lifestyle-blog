import React, { useRef, useState, ChangeEvent } from 'react'

import { IImageUploaderProps } from './ImageUploader.type'

import {
  StyledInput,
  StyledImage,
  StyledButton,
  StyledWrapper,
  StyledContentWrapper
} from './ImageUploader.style'

import defaultImage from '@asset/image/default.jpg'

const ImageUploader = ({
  accept,
  onUpload,
  imageUrl = defaultImage
}: IImageUploaderProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [previewContent, setPreviewContent] = useState<string>(imageUrl)

  const handleButtonClick = (): void | null =>
    inputRef.current && inputRef.current.click()
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist()

    const reader: FileReader = new FileReader();

    let file: File
    if (!event?.target?.files) {
      return
    }

    file = event.target.files[0]

    reader.onloadend = () => {
      if (accept === file.type) {
        onUpload(file)
        setPreviewContent(String(reader.result))
      }
    }

    reader.readAsDataURL(file);
  }

  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <StyledImage src={previewContent} />
        <StyledButton onClick={handleButtonClick}>+</StyledButton>
      </StyledContentWrapper>
      <StyledInput
        type="file"
        ref={inputRef}
        accept={accept}
        onChange={handleInputChange}
      />
    </StyledWrapper>
  )
}

export default React.memo(ImageUploader)
