import React from 'react'
import { useHistory } from 'react-router-dom'

import Dashboard from './Dashboard'
import Button from '@component/generic/Button'
import FabButton from '@component/generic/FabButton'

import useToast from '@hook/utility/useToast'

import { IArticleListPageProps } from './ArticleListPage.type'

import routeList from '@config/routeList'

const ArticleListPage = ({ articleList }: IArticleListPageProps): JSX.Element => {
  const history = useHistory()
  const toast = useToast()

  const handleAppMetricRedirect = (): void =>
    history.push(routeList.appMetric)
  
  const handleLogPageRedirect = (): void =>
    history.push(routeList.log)

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
        <Button circle={true} onClick={() => toast!.add('Test message')}>x</Button>
        <Button circle={true} onClick={handleLogPageRedirect}>y</Button>
        <Button circle={true}>+</Button>
      </FabButton>
    </>
  )
}

export default ArticleListPage
