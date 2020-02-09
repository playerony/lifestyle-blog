import React, { useState, ChangeEvent } from 'react'

import EditorInput from './EditorInput'
import UploadInput from './UploadInput'
import Input from '@component/generic/Input'
import CategorySelect from './CategorySelect'
import Button from '@component/generic/Button'

import IArticleSave from '@type/article/IArticleSave'
import { IArticleFormProps } from './ArticleForm.type'

import getFieldError from '@utility/getFieldError'

const initialState: IArticleSave = {
  title: '',
  content: '',
  imageId: null,
  description: '',
  categoryIdList: []
}

const ArticleForm = ({ onSave, errorData }: IArticleFormProps): JSX.Element => {
  const [state, setState] = useState<IArticleSave>(initialState)

  const changeState = (value: Partial<IArticleSave>): void =>
    setState({ ...state, ...value })

  const handleCategoryChange = (categoryIdList: number[]): void =>
    changeState({ categoryIdList })

  const handleImageChange = (imageId: number | null): void =>
    changeState({ imageId })

  const handleContentChange = (content: string): void =>
    changeState({ content })

  const handleInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void =>
    changeState({ [name]: value })

  const handleArticleSave = (): void => onSave(state)

  return (
    <>
      <Input
        name="title"
        label="Title"
        onChange={handleInputChange}
        errorMessage={getFieldError<IArticleSave>(errorData, 'title')}
      />
      <Input
        name="description"
        label="Description"
        onChange={handleInputChange}
        errorMessage={getFieldError<IArticleSave>(errorData, 'description')}
      />
      <CategorySelect
        onChange={handleCategoryChange}
        errorMessage={getFieldError<IArticleSave>(errorData, 'categoryIdList')}
      />
      <UploadInput
        onChange={handleImageChange}
        errorMessage={getFieldError<IArticleSave>(errorData, 'imageId')}
      />
      <EditorInput
        label="Content"
        onChange={handleContentChange}
        errorMessage={getFieldError<IArticleSave>(errorData, 'content')}
      />
      <Button
        floating={true}
        onClick={handleArticleSave}
      >
        +
      </Button>
    </>
  )
}

export default ArticleForm
