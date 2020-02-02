import React from 'react'

import ArticleListPageMobile from './mobile'
import ArticleListPageDesktop from './desktop'

import isMobile from '@utility/isMobile'

const ArticleListPage = (): JSX.Element =>
  React.createElement(isMobile() ? ArticleListPageMobile : ArticleListPageDesktop)

export default ArticleListPage
