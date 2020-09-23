import React from 'react'
import { ValueType } from 'react-select'

import Select from '@component/generic/Select'
import { withErrorBoundary } from '@component/utility/ErrorBoundary'

import ICategory from '@type/category/ICategory'
import { ICategorySelectProps } from './CategorySelect.type'
import { IOption } from '@component/generic/Select/Select.type'

import useCategoryList from '@hook/category/useCategoryList'

const CategorySelect = ({
  value,
  onChange,
  errorMessage
}: ICategorySelectProps): JSX.Element => {
  const { data, loading } = useCategoryList()

  const getOptionList = (data?: ICategory[]): IOption[] => {
    if (!data) {
      return []
    }

    return data.map(({ categoryId, name }: ICategory) => ({
      label: name!,
      value: categoryId!.toString()
    }))
  }

  const handleChange = (value: ValueType<IOption>): void => {
    let result: number[] = []
    if (value && Array.isArray(value)) {
      result = value.map(({ value }: IOption) => Number(value))
    }

    onChange(result)
  }

  const getValue = (): IOption[] => {
    const options = getOptionList(data)

    if (!value) {
      return []
    }

    return options.filter(element => value.includes(element.value))
  }

  return (
    <Select
      isMulti={true}
      label="Kategoria"
      isLoading={loading}
      onChange={handleChange}
      placeholder="Wybierz..."
      defaultValue={getValue()}
      errorMessage={errorMessage}
      options={getOptionList(data)}
    />
  )
}

export default withErrorBoundary(CategorySelect)
