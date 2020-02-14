import React from 'react'
import { useHistory } from 'react-router-dom'

import Button from '@component/generic/Button'

import routeList from '@config/routeList'

const ArticleListPage = (): JSX.Element => {
  const history = useHistory()

  const handleRedirect = (): void =>
    history.push(routeList.article.create)

  return (
    <>
      <Button
        floating={true}
        onClick={handleRedirect}
      >
        +
      </Button>
    </>
  )
}

export default ArticleListPage
