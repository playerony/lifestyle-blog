import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Tooltip from '@component/common/Tooltip'

import EToastType from '@type/common/EToastType'
import IArticleList from '@type/article/IArticleList'
import { IArticleCardProps } from './ArticleCard.type'

import useToast from '@hook/context/useToast'
import useTogglePublicFlag from '@hook/article/useTogglePublicFlag'

import formatDate from '@utility/formatDate'

import routeList from '@config/routeList'
import { ARTICLE_TOGGLE_ERROR_MESSAGE } from '@config/constant'

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

const formatArticleNumber = ({ articleId }: IArticleList): string =>
  articleId!.toString().padStart(3, '0')

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
      <Tooltip title={element.name}>
        <StyledCategoryIcon>
          <use xlinkHref={`#${element.name?.toLowerCase()}`} />
        </StyledCategoryIcon>
      </Tooltip>
    ))
  )

const ArticleCard = ({ article }: IArticleCardProps): JSX.Element => {
  const [visibility, setVisibility] = useState<boolean>(Boolean(article.isPublic))

  const toast = useToast()
  const history = useHistory()
  const toggleArticlePublicFlag = useTogglePublicFlag()

  const handleArticleEditRedirect = (): void =>
    history.push(`${routeList.article.base}/${article.articleId}/edit`)

  const { image, title, articleId, description } = article

  const handleVisibilityChange = async (): Promise<void> => {
    const result = await toggleArticlePublicFlag(articleId!, !visibility)

    if (!result) {
      return
    }

    if (!Boolean(result.errors)) {
      const isPublic = result?.data?.toggleArticlePublicFlag?.isPublic

      if (isPublic === undefined) {
        toast.add(ARTICLE_TOGGLE_ERROR_MESSAGE, EToastType.ERROR)
      } else {
        setVisibility(isPublic)
        toast.add(
          `Article with ID: ${articleId} is now ${isPublic ? 'shown' : 'hidden'}`,
          EToastType.INFO
        )
      }
    } else {
      toast.add(ARTICLE_TOGGLE_ERROR_MESSAGE, EToastType.ERROR)
    }
  }

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
              <use xlinkHref={`#${visibility ? 'visibility' : 'invisible'}`} />
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
