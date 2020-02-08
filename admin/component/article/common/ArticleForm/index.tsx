import React, { useState, ChangeEvent } from 'react'

import EditorInput from './EditorInput'
import UploadInput from './UploadInput'
import Input from '@component/generic/Input'
import CategorySelect from './CategorySelect'
import Button from '@component/generic/Button'

import useCreate from '@hook/article/useCreateMutation'

import IArticleSave from '@type/article/IArticleSave'

const initialState: IArticleSave = {
  title: '',
  content: '',
  imageId: null,
  description: '',
  categoryIdList: []
}

const ArticleForm = (): JSX.Element => {
  const [state, setState] = useState<IArticleSave>(initialState)

  const createArticle = useCreate()

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

  return (
    <>
      <Input
        name="title"
        label="Title"
        onChange={handleInputChange}
      />
      <Input
        name="description"
        label="Description"
        onChange={handleInputChange}
      />
      <CategorySelect onChange={handleCategoryChange} />
      <UploadInput onChange={handleImageChange} />
      <EditorInput
        label="Content"
        errorMessage="Error"
        onChange={handleContentChange}
      />
      <Button floating={true} onClick={() => createArticle(state)}>+</Button>
    </>
  )
}

export default ArticleForm
