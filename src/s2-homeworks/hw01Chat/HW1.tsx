import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'


export type MessageType = {
  id: number
  user: UserType
  message: MessageOneType
}

export type UserType = {
  avatar: string
  name: string
}

export type MessageOneType = {
  text: string
  time: string
}



export const message0: MessageType = {
  id: 0,
  user: {
    avatar: avatar,
    name: 'Sean',
  },
  message: {
    text: 'Sed ut  doloremque laudantium, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
    time: '22:00',
  },
}
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: avatar,
    name: 'Taras',
  },
  message: {
    text: 'Sed et quasi architecto beatae vitae dicta sunt explicabo',
    time: '10.00',
  },
}

const HW1 = () => {
  return (
    <div className={s2.hw1} id={"hw1"}>
      <div className={s2.main}>
        <div className={s2.hwTitle}>One case</div>
        <hr className={s2.hr} />
        <div className={s2.hw}>
          {/*проверка отображения (не менять)*/}
          <div className={s2.dialogs}>
            <Message message={message0} />
            <FriendMessage message={friendMessage0} />
          </div>
        </div>
      </div>
      <div className="enter">
        {/*для автоматической проверки дз (не менять)*/}
        <MessageSender M={Message} />
        <hr className={s2.hr} />
      </div>
    </div>
  )
}

export default HW1
