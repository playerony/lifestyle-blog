import React from 'react'

import EditorInput from './EditorInput'
import UploadInput from './UploadInput'
import Input from '@component/generic/Input'

const ArticleCreatePage = (): JSX.Element => (
  <div>
    <Input label="Title" />
    <UploadInput />
    <EditorInput label="Content" />
  </div>
)

export default ArticleCreatePage
