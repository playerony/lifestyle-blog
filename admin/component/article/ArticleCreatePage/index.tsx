import React from 'react'

import ArticleForm from '../ArticleForm'
import Container from '@component/common/Container'

import { IArticleCreatePageProps } from './ArticleCreatePage.type'

import { StyledHeader } from './ArticleCreatePage.style'

const ArticleCreatePage = ({
  onCreate,
  errorData
}: IArticleCreatePageProps): JSX.Element => (
  <Container>
    <StyledHeader>Dodanie nowego artykułu</StyledHeader>
    <ArticleForm onSave={onCreate} errorData={errorData} />
  </Container>
)

export default ArticleCreatePage
