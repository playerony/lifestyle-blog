import React from 'react'
import { useHistory } from 'react-router-dom'

import Dashboard from './Dashboard'
import Button from '@component/generic/Button'

import { IArticleListPageProps } from './ArticleListPage.type'

import routeList from '@config/routeList'

const ArticleListPage = ({ articleList }: IArticleListPageProps): JSX.Element => {
  const history = useHistory()

  const handleRedirect = (): void =>
    history.push(routeList.article.create)

  return (
    <>
      <Dashboard articleList={articleList} />
      <Button
        floating="left"
        onClick={handleRedirect}
      >
        +
      </Button>
      <Button
        floating="right"
        onClick={handleRedirect}
      >
        +
      </Button>
    </>
  )
}

export default ArticleListPage
