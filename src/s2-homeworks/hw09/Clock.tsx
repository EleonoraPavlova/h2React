import React, { useState } from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import { restoreState } from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
  let [timerId, setTimerId] = useState<NodeJS.Timer | undefined>(undefined)
  const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
  const [show, setShow] = useState<boolean>(false)

  const start = () => {
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

  const stringTime = new Intl.DateTimeFormat("ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  const stringDate = new Intl.DateTimeFormat("ru")

  const stringDay = new Intl.DateTimeFormat("en-US", { weekday: "long" })
  const stringMonth = new Intl.DateTimeFormat("en-US", { month: "long" })

  return (
    <div className={s.clock}>
      <div
        id={'hw9-watch'}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={'hw9-day'}>{stringDay.format(date)}</span>, {' '}
        <span id={'hw9-time'}>
          <strong> {stringTime.format(date)}</strong>
        </span>
      </div>

      <div id={'hw9-more'}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={'hw9-month'}>{stringMonth.format(date)}</span>,{' '}
              <span id={'hw9-date'}>{stringDate.format(date)}</span>
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
