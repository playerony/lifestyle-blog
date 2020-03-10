import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

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
  StyledTodayVisitorLabel,
  StyledVisitorContentWrapper
} from './ArticleCard.style'

import formatDate from '@utility/formatDate'

import routeList from '@config/routeList'

const formatArticleNumber = ({ articleId }: IArticleList): string =>
  articleId!.toString().padStart(2, '0')

const renderArticleVisitor = ({ totalVisitor, todayVisitor }: IArticleList): JSX.Element => (
  <StyledVisitorContentWrapper>
    <StyledEyeIcon>
      <use xlinkHref="#eye" />
    </StyledEyeIcon>
    <p>{totalVisitor}</p>
    <StyledTodayVisitorLabel>
      {todayVisitor ? `(+${todayVisitor})` : null}
    </StyledTodayVisitorLabel>
  </StyledVisitorContentWrapper>
)

const renderCategoryList = ({ categoryList = [] }: IArticleList): JSX.Element[] =>
  React.Children.toArray(
    categoryList.map(element => (
      <StyledCategoryIcon>
        <use xlinkHref={`#${element.name?.toLowerCase()}`} />
      </StyledCategoryIcon>
    ))
  )

const ArticleCard = ({ article }: IArticleCardProps): JSX.Element => {
  const [visibility, setVisibility] = useState<boolean>(Boolean(article.isPublic))

  const history = useHistory()

  const handleArticleEditRedirect = (): void =>
    history.push(`${routeList.article.base}/${article.articleId}/edit`)

  const { image, title, description } = article

  const handleVisibilityChange = (): void =>
    setVisibility(prev => !prev)

  return (
    <StyledWrapper>
      <StyledImage src={image?.photoUrl} />
      <StyledContentWrapper>
        <StyledContentHeader>
          <StyledArticleNumber>
            {formatArticleNumber(article)}
          </StyledArticleNumber>
          {renderArticleVisitor(article)}
          <p>{formatDate(article.createdAt)}</p>
        </StyledContentHeader>
        <StyledContentSection>
          <h1>{title}</h1>
          <label>{description}</label>
        </StyledContentSection>
        <StyledContentFooter>
          <div>
            {renderCategoryList(article)}
          </div>
          <div>
            <StyledControlIcon onClick={handleVisibilityChange}>
              <use xlinkHref={`#visibility${!visibility ? '-off' : ''}`} />
            </StyledControlIcon>
            <StyledControlIcon onClick={handleArticleEditRedirect}>
              <use xlinkHref="#noun-edit" />
            </StyledControlIcon>
          </div>
        </StyledContentFooter>
      </StyledContentWrapper>
    </StyledWrapper>
  )
}

export default React.memo(ArticleCard)
