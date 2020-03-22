import React from 'react'

import ArticleCard from '../ArticleCard'
import Slider from '@component/common/Slider'

import IArticle from '@type/article/IArticle'
import TChildren from '@type/common/TChildren'
import { IArticleListProps } from './ArticleList.type'

import variable from '@style/variable'
import { StyledLabel } from './ArticleList.style'

const calculateSliderElements = (articleList: IArticle[], maxElements: number): number =>
  articleList.length >= maxElements ? maxElements : articleList.length

const ArticleList = ({ label, articleList }: IArticleListProps): JSX.Element => {
  const renderContent = (): TChildren =>
    React.Children.toArray(
      articleList.map(element =>
        <ArticleCard article={element} />
      )
    )

  const sliderElements = calculateSliderElements(articleList, 3)
  const mediumScreenSliderElements = calculateSliderElements(articleList, 2)

  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <Slider
        speed={500}
        arrows={true}
        className="center"
        lazyLoad="ondemand"
        swipeToSlide={true}
        slidesToShow={sliderElements}
        slidesToScroll={sliderElements}
        responsive={[
          {
            breakpoint: variable.breakpoint.mediumScreen,
            settings: {
              slidesToShow: mediumScreenSliderElements,
              slidesToScroll: mediumScreenSliderElements
            }
          },
          {
            breakpoint: variable.breakpoint.smallScreen,
            settings: {
              arrows: false,
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
