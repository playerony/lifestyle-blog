import React, { useState } from 'react'

import EditorInput from './EditorInput'
import UploadInput from './UploadInput'
import Input from '@component/generic/Input'
import CategorySelect from './CategorySelect'

import { IState } from './ArticleForm.type'

const initialState: IState = {
  imageId: null,
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
  
  console.warn(state)

  return (
    <div>
      <Input label="Title" />
      <CategorySelect onChange={handleCategoryChange} />
      <UploadInput onChange={handleImageChange} />
      <EditorInput label="Content" />
    </div>
  )
}

export default ArticleForm
