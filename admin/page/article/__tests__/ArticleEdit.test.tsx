import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import IArticle from '@type/article/IArticle'
import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

const useTitleMock = jest.fn()
const toggleLoaderMock = jest.fn()

jest.mock('../../../hook/article/useUpdateMutation')
jest.doMock('../../../hook/utility/useTitle', () => useTitleMock)
jest.doMock(
  '../../../component/article/ArticleEditPage',
  () => ArticleEditPageMock
)
jest.doMock('../../../hook/context/useLoader', () => () => ({
  toggleLoader: toggleLoaderMock
}))
jest.doMock('../../../hook/article/useArticle', () => () => ({
  data: ARTICLE_MOCK,
  loading: false
}))

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalModule,
    useParams: () => ({ articleId: 1 })
  }
})

const setUp = (): ReactWrapper => {
  const ArticleEdit = require('../ArticleEdit').default

  return mount(<ArticleEdit />)
}

describe('ArticleEdit Page', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should set a proper document title', () => {
    setUp()

    expect(useTitleMock).toHaveBeenCalledWith('Edit')
  })

  describe('ArticleEditPage Component', () => {
    it('should render', () => {
      const wrapper = setUp()

      expect(wrapper.exists(ArticleEditPageMock)).toBeTruthy()
    })

    it('should contain proper props', () => {
      const wrapper = setUp()

      const articleEditPageProps: any = wrapper
        .find(ArticleEditPageMock)
        .props()
      expect(articleEditPageProps.onEdit).toBeDefined()
      expect(articleEditPageProps.errorData).toEqual(ERROR_DATA)
      expect(articleEditPageProps.initialData).toEqual(ARTICLE_MOCK)
    })
  })

  it('should call toggleLoader function', () => {
    setUp()

    expect(toggleLoaderMock).toHaveBeenLastCalledWith(false)
  })
})

const ArticleEditPageMock = (): JSX.Element => <h1>Article Edit Page</h1>

const ARTICLE_MOCK: IArticle = {
  title: 'title',
  content: 'content',
  description: 'description',
  categoryList: [
    {
      categoryId: 1
    }
  ],
  image: {
    imageId: 1,
    photoUrl: 'photoUrl'
  }
}

const ERROR_DATA: TResponseError<IArticleSave> = {
  title: [],
  imageId: [],
  content: [],
  description: [],
  categoryIdList: []
}
