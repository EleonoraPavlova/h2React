import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

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
    name: 'Some Name',
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
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,  et quasi architecto beatae vitae dicta sunt explicabo',
    time: 'Sean',
  },
}

const HW1 = () => {
  return (
    <div className={s2.hw1} id={"hw1"}>
      <div className={s2.hwTitle}>One case</div>
      <hr className={s2.hr} />
      <div className={s2.hw}>
        {/*проверка отображения (не менять)*/}
        <div>
          <Message message={message0} />
          <FriendMessage message={friendMessage0} />
        </div>

        {/*для автоматической проверки дз (не менять)*/}
        <MessageSender M={Message} />
      </div>
    </div>
  )
}

export default HW1
