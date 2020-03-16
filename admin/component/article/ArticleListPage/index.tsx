import React from 'react'
import { useHistory } from 'react-router-dom'

import Dashboard from './Dashboard'
import Button from '@component/generic/Button'
import FabButton from '@component/generic/FabButton'

import { IArticleListPageProps } from './ArticleListPage.type'

import { StyledIcon } from './ArticleListPage.style'

import routeList from '@config/routeList'

const ArticleListPage = ({ articleList }: IArticleListPageProps): JSX.Element => {
  const history = useHistory()

  const handleLogPageRedirect = (): void =>
    history.push(routeList.log)

  const handleErrorPageRedirect = (): void =>
    history.push(routeList.error)

  const handleMetricPageRedirect = (): void =>
    history.push(routeList.metric)

  const handleArticleCreatePageRedirect = (): void =>
    history.push(routeList.article.create)

  return (
    <>
      <Dashboard articleList={articleList} />
      <FabButton>
        <Button circle={true} onClick={handleErrorPageRedirect}>
          x
        </Button>
        <Button circle={true} onClick={handleLogPageRedirect}>
          <StyledIcon>
            <use xlinkHref="#report" />
          </StyledIcon>
        </Button>
        <Button circle={true} onClick={handleMetricPageRedirect}>
          <StyledIcon>
            <use xlinkHref="#metrics" />
          </StyledIcon>
        </Button>
        <Button circle={true} onClick={handleArticleCreatePageRedirect}>
          +
        </Button>
        <Button circle={true}>+</Button>
      </FabButton>
    </>
  )
}

export default ArticleListPage
