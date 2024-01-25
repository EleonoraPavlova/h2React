import React, { useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'


const HW13 = () => {
  const [code, setCode] = useState('')
  const [text, setText] = useState('')
  const [info, setInfo] = useState('')
  const [image, setImage] = useState('')


  const send = (x?: boolean | null) => () => {
    const url =
      x === null
        ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
        : 'https://samurai.it-incubator.io/api/3.0/homework/test'

    setCode('')
    setImage('')
    setText('')
    setInfo('...loading')

    axios
      .post(url, { success: x })
      .then((res) => {
        setCode('Code 200!')
        setText('...everything is ok)')
        setImage(success200)
        setInfo('code 200 - usually means that most likely everything is ok)')
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          setCode('Error!')
          setText("Network Error")
          setImage(errorUnknown)
          setInfo('AxiosError')
        } else if (e.message === "Request failed with status code 500") {
          setCode('Error 500')
          setText("simulating an error on the server")
          setImage(error500)
          setInfo('error 500 - usually means that something has broken on the server, for example a database)')
        } else {
          setCode('Code 400!')
          setText(`You didn't send success to body at all!`)
          setImage(error400)
          setInfo('error 400 - usually means that the front most likely sent something wrong to the back!')
        }
      })
  }

  return (
    <div id={'hw13'} className={s2.hw1}>
      <div className={s2.hwTitle}>Case #13</div>
      <hr className={s2.hr} />
      <div className={s2.hw}>
        <div className={s.buttonsContainer}>
          <SuperButton
            id={'hw13-send-true'}
            onClick={send(true)}
            xType={'secondary'}
            disabled={info === "...loading"}
          >
            Send true
          </SuperButton>
          <SuperButton
            id={'hw13-send-false'}
            onClick={send(false)}
            xType={'secondary'}
            disabled={info === "...loading"}
          >
            Send false
          </SuperButton>
          <SuperButton
            id={'hw13-send-undefined'}
            onClick={send(undefined)}
            xType={'secondary'}
            disabled={info === "...loading"}
          >
            Send undefined
          </SuperButton>
          <SuperButton
            id={'hw13-send-null'}
            onClick={send(null)} // имитация запроса на не корректный адрес
            xType={'secondary'}
            disabled={info === "...loading"}
          >
            Send null
          </SuperButton>
        </div>

        <div className={s.responseContainer}>
          <div className={s.imageContainer}>
            {image && <img src={image} className={s.image} alt="status" />}
          </div>

          <div className={s.textContainer}>
            <div id={'hw13-code'} className={s.code}>
              {code}
            </div>
            <div id={'hw13-text'} className={s.text}>
              {text}
            </div>
            <div id={'hw13-info'} className={s.info}>
              {info}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HW13
