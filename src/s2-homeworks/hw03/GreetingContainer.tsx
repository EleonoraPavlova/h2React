import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import style from './Greeting.module.css'

type GreetingContainerPropsType = {
  users: UserType[]
  addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: ((er: string) => void), setName: ((name: string) => void), addUserCallback: ((name: string) => void)) => {
  if (name.trim()) {
    // setName(name)
    addUserCallback(name)
    setName("")
  } else {
    setError("Ошибка! Введите имя!")
  }
}

// если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
export const pureOnBlur = (name: string, setError: ((er: string) => void)) => {
  if (!name.trim()) {
    setError("Ошибка! Введите имя!")
  }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
  // если нажата кнопка Enter - добавить
  if (e.key === "Enter") addUser()
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback, }) => {
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string>('')

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
    error && setError('')
  }
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback)
  }

  const onBlur = () => {
    pureOnBlur(name, setError)
  }

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser)
  }

  const totalUsers = users.length
  const lastUserName = users.slice(-1).map(u => u.name).join()

  return (
    <div className={style.greeting}>
      <Greeting
        name={name}
        setNameCallback={setNameCallback}
        addUser={addUser}
        onBlur={onBlur}
        onEnter={onEnter}
        error={error}
        totalUsers={totalUsers}
        lastUserName={lastUserName}
      />
    </div >
  )
}

export default GreetingContainer
