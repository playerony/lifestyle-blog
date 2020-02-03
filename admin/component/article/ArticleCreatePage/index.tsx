import React from 'react'

import ArticleForm from '../common/ArticleForm'

import { StyledWrapper, StyledHeader } from './ArticleCreatePage.style'

const ArticleCreatePage = (): JSX.Element => (
  <StyledWrapper>
    <StyledHeader>
      Adding a new article
    </StyledHeader>
    <ArticleForm />
  </StyledWrapper>
)

export default ArticleCreatePage
