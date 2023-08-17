import React from 'react'
import s from './Message.module.css'
import AppStyle from '../../../s1-main/App.module.css'
import { MessageType } from "../HW1"

type MessageTypeProps = {
  message: MessageType
}

const Message = (props: MessageTypeProps) => {
  return (
    <div id={'hw1-message-' + props.message.id} className={s.message}>
      <div className={s.imageAndText}>
        <div>
          <img
            id={'hw1-avatar-' + props.message.id}
            src={props.message.user.avatar}
            alt="avatar"
          />
          <div id={'hw1-time-' + props.message.id} className={s.time}>
            <p className={s.time}>{props.message.message.time}</p>
          </div>
        </div>
        <div className={`${s.text} ${AppStyle.textDialogs}`}>
          <div id={'hw1-name-' + props.message.id} className={s.name}>
            {props.message.user.name}
          </div>
          <div id={'hw1-text-' + props.message.id} className={s.messageText}>
            {props.message.message.text}
            {/**/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
