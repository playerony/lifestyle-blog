import React from 'react'

import ArticleList from './ArticleList'
import Container from '@component/common/Container'

import { IDashboardProps } from './Dashboard.type'

const Dashboard = ({ articleList }: IDashboardProps): JSX.Element => (
  <Container>
    <ArticleList articleList={articleList} />
  </Container>
)

export default Dashboard
