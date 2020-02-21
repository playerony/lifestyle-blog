import React from 'react'

import IArticleList from '@type/article/IArticleList'
import { IArticleCardProps } from './ArticleCard.type'

import {
  StyledImage,
  StyledWrapper,
  StyledEyeIcon,
  StyledControlIcon,
  StyledCategoryIcon,
  StyledArticleNumber,
  StyledContentFooter,
  StyledContentHeader,
  StyledContentWrapper,
  StyledContentSection,
  StyledTodayViewLabel,
  StyledViewContentWrapper
} from './ArticleCard.style'

const formatDate = (date?: Date): string => {
  if (!date) {
    return 'Date do not exist.'
  }

  return new Date(date).toLocaleDateString().replace(new RegExp('/', 'g'), '.')
}

const renderArticleViews = ({ totalVisitor, todayVisitor }: IArticleList): JSX.Element => (
  <StyledViewContentWrapper>
    <StyledEyeIcon>
      <use xlinkHref="#eye" />
    </StyledEyeIcon>
    <p>{totalVisitor}</p>
    <StyledTodayViewLabel>
      {!todayVisitor ? `(+${todayVisitor})` : null}
    </StyledTodayViewLabel>
  </StyledViewContentWrapper>
)

const ArticleCard = ({ article }: IArticleCardProps): JSX.Element => {
  const { image, title, description, articleId, createdAt, categoryList } = article

  const renderCategoryList = (): JSX.Element[] =>
    React.Children.toArray(
      (categoryList || []).map(element => (
        <StyledCategoryIcon>
          <use xlinkHref={`#${element.name?.toLowerCase()}`} />
        </StyledCategoryIcon>
      ))
    )

  return (
    <StyledWrapper>
      <StyledImage src={image?.photoUrl} />
      <StyledContentWrapper>
        <StyledContentHeader>
          <StyledArticleNumber>{articleId}</StyledArticleNumber>
          {renderArticleViews(article)}
          <p>{formatDate(createdAt)}</p>
        </StyledContentHeader>
        <StyledContentSection>
          <h1>{title}</h1>
          <label>{description}</label>
        </StyledContentSection>
        <StyledContentFooter>
          <div>
            {renderCategoryList()}
          </div>
          <div>
            <StyledControlIcon>
              <use xlinkHref="#metrics" />
            </StyledControlIcon>
            <StyledControlIcon>
              <use xlinkHref="#noun-edit" />
            </StyledControlIcon>
          </div>
        </StyledContentFooter>
      </StyledContentWrapper>
    </StyledWrapper>
  )
}

export default React.memo(ArticleCard)
