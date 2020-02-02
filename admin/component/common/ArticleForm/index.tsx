import React from 'react'

import EditorInput from './EditorInput'
import UploadInput from './UploadInput'
import Input from '@component/generic/Input'
import CategorySelect from './CategorySelect'

const ArticleForm = (): JSX.Element => (
  <div>
    <Input label="Title" />
    <CategorySelect />
    <UploadInput />
    <EditorInput label="Content" />
  </div>
)

export default ArticleForm
