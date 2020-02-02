import React from 'react'

import Select from '@component/generic/Select'

import ICategory from '@type/article/ICategory'

import useCategoryList from '@hook/common/ArticleForm/useCategoryList'

const CategorySelect = (): JSX.Element => {
  const { data, loading } = useCategoryList()

  const getOptions = (data: ICategory[]): { label: string, value: string }[] => {
    if (!data) {
      return []
    }

    return data.map(({ categoryId, name }: ICategory) =>
      ({ label: name, value: categoryId.toString() }))
  }

  return (
    <Select
      isMulti={true}
      isLoading={loading}
      options={getOptions(data)}
    />
  )
}

export default CategorySelect
