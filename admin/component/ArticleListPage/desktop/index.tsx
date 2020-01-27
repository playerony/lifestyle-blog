import React from 'react'

import routeList from '@config/routeList'

const ArticleListPage = (): JSX.Element => (
  <a href={routeList.article.create}>
    Article List Desktop
  </a>
)

export default ArticleListPage
