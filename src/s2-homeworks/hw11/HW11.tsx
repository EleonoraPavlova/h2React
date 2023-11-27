import React, { useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'


function HW11() {
  // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
  const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
  const [value2, setValue2] = useState(restoreState<number[]>('hw11-value2', [0, 100]))

  const change = (event: Event, value: number | number[]) => {
    if (typeof value === "object") {
      setValue1(value[0])
      setValue2(value as number[])
    } else {
      setValue1(value)
      setValue2([value, value2[1]])
    }
    console.log("event.target", event.target)
    console.log("typeof value", typeof value)
    //  если пришёл массив - сохранить значения в оба useState, иначе в первый
  }

  return (
    <div id={'hw11'}>
      <div className={s2.hwTitle}>Case #11</div>
      <hr className={s2.hr} />
      <div className={s2.hw}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <span id={'hw11-value'} className={s.number}>{value1}</span>
            <SuperRange
              id={'hw11-single-slider'}
              value={value1}
              onChange={change}
            />
          </div>
          <div className={s.wrapper}>
            <span id={'hw11-value-1'} className={s.number}>{value1}</span>
            <SuperRange
              id={'hw11-double-slider'}
              value={value2}
              onChange={change}
            />
            <span id={'hw11-value-2'} className={s.number}>{value2[1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HW11
