import React from 'react'

import EditorInput from './EditorInput'
import Input from '@component/generic/Input'

const ArticleCreatePage = (): JSX.Element => (
  <div>
    <Input label="Title" />
    <EditorInput label="Content" />
  </div>
)

export default ArticleCreatePage
