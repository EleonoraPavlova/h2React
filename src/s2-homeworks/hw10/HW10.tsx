import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStoreType } from './bll/store'
import { loadingAC } from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import { Loader } from './Loader'


const HW10 = () => {
  let isLoading = useSelector<AppStoreType>(state => state.loading.isLoading)

  const dispatch = useDispatch()

  const setLoading = () => {
    dispatch(loadingAC(!isLoading))

    const timerId = setTimeout(() => {
      dispatch(loadingAC(false))
    }, 1500)
    return () => clearTimeout(timerId)
  }

  return (

    <div id={'hw10'} className={s2.hw1}>
      <div className={s2.hwTitle}>Case #10</div>
      <hr className={s2.hr} />
      <div className={s2.hw}>

        {isLoading ? (
          <div id={'hw10-loading'}>
            <Loader />
          </div>
        ) : (
          <SuperButton
            id={'hw10-button-start-loading'}
            onClick={setLoading}
          >
            Set loading...
          </SuperButton>
        )}
      </div>
    </div>
  )
}

export default HW10
