import React from 'react'

import ArticleCard from '../ArticleCard'

import { IArticleListProps } from './ArticleList.type'

const ArticleList = ({ articleList }: IArticleListProps): JSX.Element => {
  const renderContent = (): JSX.Element[] =>
    React.Children.toArray(
      articleList.map(element =>
        <ArticleCard article={element} />
      )
    )

  return (
    <div style={{ display: 'flex', flexWrap: 'nowrap', width: '100%', justifyContent: 'space-evenly' }}>
      {renderContent()}
    </div>
  )
}

export default ArticleList
