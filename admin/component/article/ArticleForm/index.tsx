import { useHistory } from 'react-router-dom'
import React, { useState, ChangeEvent } from 'react'

import EditorInput from './EditorInput'
import UploadInput from './UploadInput'
import Input from '@component/generic/Input'
import CategorySelect from './CategorySelect'
import Button from '@component/generic/Button'

import IArticle from '@type/article/IArticle'
import IArticleSave from '@type/article/IArticleSave'
import { IArticleFormProps } from './ArticleForm.type'

import getFieldError from '@utility/getFieldError'

import { StyledArrowIcon } from './ArticleForm.style'

const initialState: IArticleSave = {
  title: '',
  content: '',
  imageId: null,
  description: '',
  categoryIdList: []
}

const getInitialData = (initialData?: IArticle): IArticleSave => {
  if (!initialData) {
    return initialState
  }

  return {
    title: initialData.title || '',
    content: initialData.content || '',
    description: initialData.description || '',
    imageId: initialData.image?.imageId || null,
    categoryIdList: initialData.categoryList?.map(element => element.categoryId!) || []
  }
}

const ArticleForm = ({ onSave, errorData, initialData }: IArticleFormProps): JSX.Element => {
  const [state, setState] = useState<IArticleSave>(getInitialData(initialData))

  const history = useHistory()

  const changeState = (value: Partial<IArticleSave>): void =>
    setState({ ...state, ...value })

  const handleContentChange = (content: string): void =>
    changeState({ content })

  const handleImageChange = (imageId: number | null): void =>
    changeState({ imageId })

  const handleCategoryChange = (categoryIdList: number[]): void =>
    changeState({ categoryIdList })

  const handleInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void =>
    changeState({ [name]: value })

  const handleArticleSaveClick = (): void =>
    onSave(state)

  const handleBackButtonClick = (): void =>
    history.goBack()

  return (
    <>
      <Input
        name="title"
        label="Title"
        defaultValue={state.title}
        onChange={handleInputChange}
        errorMessage={getFieldError<IArticleSave>(errorData, 'title')}
      />
      <Input
        name="description"
        label="Description"
        onChange={handleInputChange}
        defaultValue={state.description}
        errorMessage={getFieldError<IArticleSave>(errorData, 'description')}
      />
      <CategorySelect
        onChange={handleCategoryChange}
        value={state.categoryIdList.map(element => element.toString())}
        errorMessage={getFieldError<IArticleSave>(errorData, 'categoryIdList')}
      />
      <UploadInput
        onChange={handleImageChange}
        imageUrl={initialData?.image?.photoUrl}
        errorMessage={getFieldError<IArticleSave>(errorData, 'imageId')}
      />
      <EditorInput
        label="Content"
        initialValue={state.content}
        onChange={handleContentChange}
        errorMessage={getFieldError<IArticleSave>(errorData, 'content')}
      />
      <Button
        circle={true}
        floating="left"
        onClick={handleBackButtonClick}
      >
        <StyledArrowIcon>
          <use xlinkHref="#left-arrow-button" />
        </StyledArrowIcon>
      </Button>
      <Button
        circle={true}
        floating="right"
        onClick={handleArticleSaveClick}
      >
        +
      </Button>
    </>
  )
}

export default ArticleForm
