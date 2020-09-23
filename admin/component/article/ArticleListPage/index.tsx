import React from 'react'
import { useHistory } from 'react-router-dom'

import Dashboard from './Dashboard'
import Button from '@component/generic/Button'
import Tooltip from '@component/common/Tooltip'
import FabButton from '@component/generic/FabButton'

import { IArticleListPageProps } from './ArticleListPage.type'

import { StyledIcon } from './ArticleListPage.style'

import routeList from '@config/routeList'

const ArticleListPage = ({
  articleList
}: IArticleListPageProps): JSX.Element => {
  const history = useHistory()

  const handleLogPageRedirect = (): void => history.push(routeList.log)

  const handleMetricPageRedirect = (): void => history.push(routeList.metric)

  const handleArticleCreatePageRedirect = (): void =>
    history.push(routeList.article.create)

  return (
    <>
      <Dashboard articleList={articleList} />
      <FabButton>
        <Tooltip title="Analiza logów">
          <Button circle={true} onClick={handleLogPageRedirect}>
            <StyledIcon>
              <use xlinkHref="#log" />
            </StyledIcon>
          </Button>
        </Tooltip>
        <Tooltip title="Analiza odwiedzających">
          <Button circle={true} onClick={handleMetricPageRedirect}>
            <StyledIcon>
              <use xlinkHref="#metric" />
            </StyledIcon>
          </Button>
        </Tooltip>
        <Tooltip title="Dodaj artykuł">
          <Button circle={true} onClick={handleArticleCreatePageRedirect}>
            +
          </Button>
        </Tooltip>
        <Button circle={true}>+</Button>
      </FabButton>
    </>
  )
}

export default ArticleListPage
