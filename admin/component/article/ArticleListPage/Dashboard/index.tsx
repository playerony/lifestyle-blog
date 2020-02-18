import React from 'react'

import ArticleList from './ArticleList'

import { IDashboardProps } from './Dashboard.type'

const Dashboard = ({ articleList }: IDashboardProps): JSX.Element => <ArticleList articleList={articleList} />

export default Dashboard
