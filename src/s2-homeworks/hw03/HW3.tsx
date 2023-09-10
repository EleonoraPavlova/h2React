import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'
import style from "./Greeting.module.css"

/*
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName)

* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки
* */

export type UserType = {
  _id: string
  name: string
}


export const pureAddUserCallback = (name: string, setUsers: ((users: UserType[]) => void), users: UserType[]) => {
  const newUser = {
    _id: v1(),
    name: name
  }
  setUsers([...users, newUser])
  console.log("users", users)
}

const HW3 = () => {
  const [users, setUsers] = useState<UserType[]>([])

  const addUserCallback = (name: string) => {
    pureAddUserCallback(name, setUsers, users)
  }

  return (
    <div id={'hw3'} className={s2.hw2}>
      <div className={s2.hwTitle}>Case three</div>
      <hr className={s2.hr} />
      {/*для автоматической проверки дз (не менять)*/}

      <div className={s2.hw}>
        <GreetingContainer
          users={users}
          addUserCallback={addUserCallback}
        />
      </div>
      <hr className={s2.hr} />
    </div>
  )
}

export default HW3
