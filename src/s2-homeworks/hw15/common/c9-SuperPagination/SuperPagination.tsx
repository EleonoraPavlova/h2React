import React, { ChangeEvent } from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import { Pagination } from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
  id?: string
  page: number
  itemsCountForPage: number
  totalCount: number
  onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
  { page, itemsCountForPage, totalCount, onChange, id = 'hw15' }
) => {
  const lastPage = Math.ceil(totalCount / itemsCountForPage)

  const onChangeCallback = (event: ChangeEvent<unknown>, page: number) => {
    onChange(page, itemsCountForPage)
  }

  const onChangeSelect = (id: number) => {
    onChange(page, id)
  }

  // debugger
  return (
    <div className={s.pagination}>
      <Pagination
        id={id + '-pagination'}
        sx={{
          '& .Mui-selected': {
            color: 'white',
            backgroundColor: 'blue',
          },
        }}
        page={page}
        count={lastPage}
        onChange={onChangeCallback}
        hideNextButton
        hidePrevButton
      />

      <span className={s.text1}>
        Показать
      </span>

      <SuperSelect
        id={id + '-pagination-select'}
        value={itemsCountForPage}
        className={s.select}
        options={[
          { id: 4, value: 4 },
          { id: 7, value: 7 },
          { id: 10, value: 10 },
        ]}
        onChangeOption={onChangeSelect}
      />

      <span className={s.text2}>
        строк в таблице
      </span>
    </div>
  )
}

export default SuperPagination
