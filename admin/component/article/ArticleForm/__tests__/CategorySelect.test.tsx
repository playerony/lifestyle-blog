import { mount, ReactWrapper } from 'enzyme'
import { act } from '@testing-library/react-hooks'
import React, { useState, ReactElement } from 'react'

import Select from '@component/generic/Select'
import CategorySelect from '../CategorySelect'
import ThemeProviderMock from '@component/utility/ThemeProviderMock'

import ICategory from '@type/category/ICategory'

import useTimeout from '@hook/utility/useTimeout'
import useCategoryList from '@hook/category/useCategoryList'

jest.useFakeTimers()
jest.mock('../../../../hook/category/useCategoryList')

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('CategorySelect Component', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  beforeEach(() => {
    (useCategoryList as jest.Mock).mockImplementation(useCategoryListMock)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render', () => {
    const wrapper = mountComponent(<CategorySelect onChange={jest.fn()} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should select with loading state', () => {
    const wrapper = mountComponent(<CategorySelect onChange={jest.fn()} />)

    expect(wrapper.exists(Select)).toBeTruthy()

    const selectProps = wrapper.find(Select).props()
    expect(selectProps.options).toEqual([])
    expect(selectProps.isMulti).toBeTruthy()
    expect(selectProps.isLoading).toBeTruthy()
    expect(selectProps.onChange).toBeDefined()
    expect(selectProps.label).toEqual('Category')
  })

  it('should select with loaded data', () => {
    const wrapper = mountComponent(<CategorySelect onChange={jest.fn()} />)

    act(() => { jest.advanceTimersByTime(5) })
    wrapper.mount()

    const selectProps = wrapper.find(Select).props()
    expect(selectProps.options).toEqual([
      {
        label: 'Category 1',
        value: '1'
      }, {
        label: 'Category 2',
        value: '2'
      }
    ])
    expect(selectProps.isMulti).toBeTruthy()
    expect(selectProps.isLoading).toBeFalsy()
    expect(selectProps.onChange).toBeDefined()
    expect(selectProps.label).toEqual('Category')
  })
})

const useCategoryListMock = () => {
  const [data, setData] = useState<ICategory[]>([])
  const [loading, setLoading] = useState(true)

  useTimeout(() => {
    setLoading(false)
    setData(CATEGORY_LIST_RESULT_DATA)
  }, 1)

  return {
    data,
    loading
  }
}

const CATEGORY_LIST_RESULT_DATA: ICategory[] = [
  {
    categoryId: 1,
    name: 'Category 1'
  },
  {
    categoryId: 2,
    name: 'Category 2'
  }
]
