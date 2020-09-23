import React from 'react'

import ArticleForm from '../ArticleForm'
import Container from '@component/common/Container'

import { IArticleEditPageProps } from './ArticleEditPage.type'

import { StyledHeader } from './ArticleEditPage.style'

const ArticleEditPage = ({
  errorData,
  onEdit,
  initialData
}: IArticleEditPageProps): JSX.Element => (
  <Container>
    <StyledHeader>Edycja artykułu</StyledHeader>
    <ArticleForm
      onSave={onEdit}
      errorData={errorData}
      initialData={initialData}
    />
  </Container>
)

export default ArticleEditPage
