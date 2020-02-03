import React, { useState, ChangeEvent } from 'react'

import EditorInput from './EditorInput'
import UploadInput from './UploadInput'
import Input from '@component/generic/Input'
import CategorySelect from './CategorySelect'

import { IState } from './ArticleForm.type'

const initialState: IState = {
  title: '',
  content: '',
  imageId: null,
  description: '',
  categoryIdList: []
}

const ArticleForm = (): JSX.Element => {
  const [state, setState] = useState<IState>(initialState)

  const changeState = (value: Partial<IState>): void =>
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
    <div>
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
      <EditorInput label="Content" onChange={handleContentChange} />
    </div>
  )
}

export default ArticleForm
