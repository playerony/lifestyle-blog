import React from 'react'

import ArticleCard from '../ArticleCard'
import Slider from '@component/common/Slider'

import { IArticleListProps } from './ArticleList.type'

import variable from '@style/variable'

const ArticleList = ({ articleList }: IArticleListProps): JSX.Element => {
  const renderContent = (): JSX.Element[] =>
    React.Children.toArray(
      articleList.map(element =>
        <ArticleCard article={element} />
      )
    )

  return (
    <Slider
      speed={500}
      slidesToShow={3}
      slidesToScroll={3}
      lazyLoad="progressive"
      centerMode={true}
      className="center"
      swipeToSlide={true}
      centerPadding={`${variable.paddingBig}px`}
      responsive={[
        {
          breakpoint: variable.mediumScreen,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: variable.smallScreen,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}
    >
      {renderContent()}
    </Slider>
  )
}

export default ArticleList
