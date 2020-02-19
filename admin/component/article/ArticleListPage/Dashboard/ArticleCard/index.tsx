import React from 'react'

import { IArticleCardProps } from './ArticleCard.type'

import { StyledImage, StyledWrapper } from './ArticleCard.style'

const ArticleCard = ({ article }: IArticleCardProps): JSX.Element => {
  return (
    <StyledWrapper>
      <StyledImage src={article.image?.photoUrl} />
      <h1>
        {article.title}
      </h1>
    </StyledWrapper>
  )
}

export default React.memo(ArticleCard)
