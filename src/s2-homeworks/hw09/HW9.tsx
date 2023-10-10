import React from 'react'
import Clock from './Clock'
import s2 from '../../s1-main/App.module.css'

const HW9 = () => {
  return (
    <div id={'hw9'} className={s2.hw1}>
      <div className={s2.hwTitle}>Case #9</div>
      <hr className={s2.hr} />
      <div className={s2.hw}>
        <Clock />
      </div>
    </div>
  )
}

export default HW9
