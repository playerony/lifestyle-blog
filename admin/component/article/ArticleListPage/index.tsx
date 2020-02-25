import React from 'react'
import { useHistory } from 'react-router-dom'

import Dashboard from './Dashboard'
import Button from '@component/generic/Button'
import FabButton from '@component/generic/FabButton'

import { IArticleListPageProps } from './ArticleListPage.type'

import routeList from '@config/routeList'

const ArticleListPage = ({ articleList }: IArticleListPageProps): JSX.Element => {
  const history = useHistory()

  // const handleArticleCreateRedirect = (): void =>
  //   history.push(routeList.article.create)

  const handleAppMetricRedirect = (): void =>
    history.push(routeList.appMetric)

  return (
    <>
      <Dashboard articleList={articleList} />
      <Button
        circle={true}
        onClick={handleAppMetricRedirect}
      >
        +
      </Button>
      <FabButton>
        <Button circle={true}>x</Button>
        <Button circle={true}>y</Button>
        <Button circle={true}>+</Button>
      </FabButton>
    </>
  )
}

export default ArticleListPage
