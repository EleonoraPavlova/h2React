import React, { useEffect, useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW15.module.css'
import axios from 'axios'
import SuperPagination from './common/c9-SuperPagination/SuperPagination'
import { useSearchParams } from 'react-router-dom'
import SuperSort from './common/c10-SuperSort/SuperSort'
import { log } from "console"


type TechType = {
  id: number
  tech: string
  developer: string
}

type ParamsType = {
  sort: string
  page: number
  count: number
}

const getTechs = (params: ParamsType) => {
  return axios
    .get<{ techs: TechType[], totalCount: number }>(
      'https://samurai.it-incubator.io/api/3.0/homework/test3',
      { params }
    )
    .catch((e) => {
      alert(e.response?.data?.errorText || e.message)
    })
}

const HW15 = () => {
  const [sort, setSort] = useState('')
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(4)
  const [idLoading, setLoading] = useState(false)
  const [totalCount, setTotalCount] = useState(100)
  const [searchParams, setSearchParams] = useSearchParams()
  const [techs, setTechs] = useState<TechType[]>([])

  const sendQuery = (params: ParamsType) => {
    setLoading(true)
    getTechs(params)
      .then((res) => {
        if (res) {
          setTechs(res.data.techs)
          setTotalCount(res.data.totalCount)
        }
      })
      .catch((e) => {
        console.log(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const getUrlParams = (newPage: number, newCount: number, newSort: string) => {
    const updatedSearchParams = new URLSearchParams(searchParams)
    updatedSearchParams.set("page", newPage.toString())
    updatedSearchParams.set('count', newCount.toString())
    updatedSearchParams.set('sort', newSort)
    return updatedSearchParams
  }

  const onChangePagination = (newPage: number, newCount: number) => {
    setPage(newPage)
    setCount(newCount)
    // const updatedSearchParams = new URLSearchParams(searchParams)
    // updatedSearchParams.set("page", newPage.toString())
    // updatedSearchParams.set('count', newCount.toString())
    // updatedSearchParams.set('sort', sort);
    const updatedSearchParams = getUrlParams(newPage, newCount, sort)
    setSearchParams(updatedSearchParams.toString())
    sendQuery({ sort, page: newPage, count: newCount })
  }

  const onChangeSort = (newSort: string) => {
    // const updatedSearchParams = new URLSearchParams(searchParams)
    // updatedSearchParams.set("page", '1');
    // updatedSearchParams.set('count', count.toString());
    // updatedSearchParams.set('sort', newSort);
    setSort(newSort)
    setPage(1)
    const updatedSearchParams = getUrlParams(1, count, newSort)
    setSearchParams(updatedSearchParams.toString())
    sendQuery({ sort: newSort, count, page: 1 })
  }

  useEffect(() => {
    const params = Object.fromEntries(searchParams);
    const pageNumber = params.page ? +params.page : page;
    const elementsCount = params.count ? +params.count : count;
    sendQuery({ sort: params.sort, page: pageNumber, count: elementsCount });
    setPage(pageNumber || 1);
    setCount(elementsCount || 4);
    setSort(params.sort || '');
  }, [searchParams])

  const mappedTechs = techs.map(t => (
    <div>
      <div className={s.row} key={t.id} >
        <div id={'hw15-tech-' + t.id} className={s.tech}>
          {t.tech}
        </div>

        <div id={'hw15-developer-' + t.id} className={s.developer}>
          {t.developer}
        </div>
      </div>
      <hr className={s2.hr} />
    </div>
  ))

  return (
    <div id={'hw15'} className={s2.hw1} >
      <div className={s2.hwTitle}>Case #15</div>
      <hr className={s2.hr} />
      <div className={s2.hw} style={{ position: 'relative' }}>
        {idLoading &&
          <div className={s.overlay}>
            <div id={'hw15-loading'} className={s.loading}></div>
          </div>
        }
        <SuperPagination
          page={page}
          itemsCountForPage={count}
          totalCount={totalCount}
          onChange={onChangePagination}
        />

        <div className={s.rowHeader}>
          <div className={s.techHeader}>
            Tech
            <SuperSort sort={sort} value={'tech'} onChange={onChangeSort} />
          </div>

          <div className={s.developerHeader}>
            Developer
            <SuperSort sort={sort} value={'developer'} onChange={onChangeSort} />
          </div>
        </div>
        {mappedTechs}
      </div>
    </div >
  )
}

export default HW15