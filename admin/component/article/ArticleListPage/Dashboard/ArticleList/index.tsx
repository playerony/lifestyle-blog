import React from 'react'

import ArticleCard from '../ArticleCard'
import Slider from '@component/common/Slider'

import { IArticleListProps } from './ArticleList.type'

import variable from '@style/variable'
import { StyledLabel } from './ArticleList.style'

const ArticleList = ({ label, articleList }: IArticleListProps): JSX.Element => {
  const renderContent = (): JSX.Element[] =>
    React.Children.toArray(
      articleList.map(element =>
        <ArticleCard article={element} />
      )
    )

  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <Slider
        speed={500}
        slidesToShow={3}
        slidesToScroll={3}
        className="center"
        swipeToSlide={true}
        lazyLoad="progressive"
        responsive={[
          {
            breakpoint: variable.breakpoint.mediumScreen,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: variable.breakpoint.smallScreen,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]}
      >
        {renderContent()}
      </Slider>
    </>
  )
}

export default ArticleList
