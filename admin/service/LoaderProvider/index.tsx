import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import LoadingPage from '@page/Loading'

import { ILoaderProviderProps } from './LoaderProvider.type'

import { LoaderContext } from '@context/Loader'

import StyledFadeAnimation from '@style/animation/fade'

const ANIMATION_DURATION = 100
const ANIMATION_NAME = 'loader_fade'

const LoaderProvider = ({ children }: ILoaderProviderProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)

  const toggleLoader = (isLoading: boolean): void =>
    setLoading(isLoading)

  return (
    <LoaderContext.Provider value={{ toggleLoader }}>
      <StyledFadeAnimation
        exit={true}
        enter={true}
        animationName={ANIMATION_NAME}
        animationDuration={`${ANIMATION_DURATION}ms`}
      >
        <TransitionGroup>
          <CSSTransition
            key={loading ? 'loading' : 'no-loading'}
            classNames={ANIMATION_NAME}
            timeout={ANIMATION_DURATION}
          >
            <div>
              {loading && <LoadingPage />}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </StyledFadeAnimation>
      {children}
    </LoaderContext.Provider>
  )
}

export default LoaderProvider
