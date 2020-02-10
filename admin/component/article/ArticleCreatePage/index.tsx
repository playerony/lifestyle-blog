import React from 'react'

import Switch from '@component/generic/Switch'
import ArticleForm from '../common/ArticleForm'

import { IArticleCreatePageProps } from './ArticleCreatePage.type'

import { StyledWrapper, StyledHeader } from './ArticleCreatePage.style'

const ArticleCreatePage = ({ onCreate, errorData }: IArticleCreatePageProps): JSX.Element => (
  <StyledWrapper>
    <StyledHeader>
      Adding a new article
    </StyledHeader>
    <ArticleForm
      onSave={onCreate}
      errorData={errorData}
    />
    <Switch />
  </StyledWrapper>
)

export default ArticleCreatePage
