import React, { useState } from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import { restoreState } from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
  let [timerId, setTimerId] = useState<NodeJS.Timer | undefined>(undefined)
  const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
  const [show, setShow] = useState<boolean>(false)

  const start = () => {
    // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    let timeId: NodeJS.Timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    setTimerId(timeId)
  }

  const stop = () => {
    if (timerId !== undefined) {
      clearInterval(timerId)
      setTimerId(undefined)
    }
  }

  const onMouseEnter = () => {
    stop()
    setShow(true)
  }

  const onMouseLeave = () => {
    stop()
    setShow(false)
  }

  let dateC = new Date();
  const stringTime = new Intl.DateTimeFormat("ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });// часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringDate = new Intl.DateTimeFormat("en-US") // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }) // пишут студенты
  const stringMonth = new Intl.DateTimeFormat("en-US", { month: "long" })  // пишут студенты

  return (
    <div className={s.clock}>
      <div
        id={'hw9-watch'}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={'hw9-day'}>{stringDay.format(dateC)}</span>, {' '}
        <span id={'hw9-time'}>
          <strong> {stringTime.format(dateC)}</strong>
        </span>
      </div>

      <div id={'hw9-more'}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={'hw9-month'}>{stringMonth.format(dateC)}</span>,{' '}
              <span id={'hw9-date'}>{stringDate.format(dateC)}</span>
            </>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={'hw9-button-start'}
          disabled={timerId === undefined ? false : true} // пишут студенты // задизэйблить если таймер запущен
          onClick={start}
        >
          Start
        </SuperButton>
        <SuperButton
          id={'hw9-button-stop'}
          disabled={timerId ? false : true} // пишут студенты // задизэйблить если таймер не запущен
          onClick={stop}
        >
          Stop
        </SuperButton>
      </div>
    </div>
  )
}

export default Clock
