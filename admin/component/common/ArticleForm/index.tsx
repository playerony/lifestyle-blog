import React from 'react'

import EditorInput from './EditorInput'
import UploadInput from './UploadInput'
import Input from '@component/generic/Input'
import Select from '@component/generic/Select'

const ArticleForm = (): JSX.Element => (
  <div>
    <Input label="Title" />
    <Select
      isMulti={true}
      options={[
        { label: 'Sport', value: '1' },
        { label: 'Programming', value: '2' },
        { label: 'Meditation', value: '3' }
      ]}
    />
    <UploadInput />
    <EditorInput label="Content" />
  </div>
)

export default ArticleForm
