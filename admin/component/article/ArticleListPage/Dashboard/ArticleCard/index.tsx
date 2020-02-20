import React from 'react'

import { IArticleCardProps } from './ArticleCard.type'

import {
  StyledImage,
  StyledArticleNumber,
  StyledWrapper,
  StyledContentHeader,
  StyledContentWrapper,
} from './ArticleCard.style'

const formatDate = (date?: Date): string => {
  if (!date) {
    return 'Date do not exist.'
  }

  return new Date(date).toLocaleDateString().replace(new RegExp('/', 'g'), '.')
}

const ArticleCard = ({ article }: IArticleCardProps): JSX.Element => {
  const { image, title, description, articleId, createdAt } = article

  return (
    <StyledWrapper>
      <StyledImage src={image?.photoUrl} />
      <StyledContentWrapper>
        <StyledContentHeader>
          <StyledArticleNumber>{articleId}</StyledArticleNumber>
          <p>{formatDate(createdAt)}</p>
        </StyledContentHeader>
        <label>{title}</label>
        <p>{description}</p>
      </StyledContentWrapper>
    </StyledWrapper>
  )
}

export default React.memo(ArticleCard)
