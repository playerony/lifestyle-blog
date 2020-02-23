import React from 'react'
import { useHistory } from 'react-router-dom'

import Dashboard from './Dashboard'
import Button from '@component/generic/Button'

import { IArticleListPageProps } from './ArticleListPage.type'

import routeList from '@config/routeList'

const ArticleListPage = ({ articleList }: IArticleListPageProps): JSX.Element => {
  const history = useHistory()

  const handleArticleCreateRedirect = (): void =>
    history.push(routeList.article.create)

  const handleAppMetricRedirect = (): void =>
    history.push(routeList.appMetric)

  return (
    <>
      <Dashboard articleList={articleList} />
      <Button
        floating="left"
        onClick={handleAppMetricRedirect}
      >
        +
      </Button>
      <Button
        floating="right"
        onClick={handleArticleCreateRedirect}
      >
        +
      </Button>
    </>
  )
}

export default ArticleListPage
