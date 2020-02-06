import React from 'react'
import { ValueType } from 'react-select'

import Select from '@component/generic/Select'

import ICategory from '@type/category/ICategory'
import { ICategorySelectProps } from './CategorySelect.type'
import { IOption } from '@component/generic/Select/Select.type'

import useCategoryList from '@hook/article/useCategoryList'

const CategorySelect = ({ onChange }: ICategorySelectProps): JSX.Element => {
  const { data, loading } = useCategoryList()

  const getOptionList = (data: ICategory[]): IOption[] => {
    if (!data) {
      return []
    }

    return data.map(({ categoryId, name }: ICategory) =>
      ({ label: name, value: categoryId.toString() }))
  }

  const handleChange = (value: ValueType<IOption>): void => {
    let result: number[] = []
    if (value && Array.isArray(value)) {
      result = value.map(({ value }: IOption) => Number(value))
    }

    onChange(result)
  }

  return (
    <Select
      isMulti={true}
      label="Category"
      isLoading={loading}
      onChange={handleChange}
      options={getOptionList(data)}
    />
  )
}

export default CategorySelect
