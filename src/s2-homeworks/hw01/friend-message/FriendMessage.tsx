import React from 'react'
import s from './FriendMessage.module.css'
import AppStyle from '../../../s1-main/App.module.css'
import { MessageType } from "../HW1"

type FriendMessagetype = {
  message: MessageType
}


const FriendMessage = (props: FriendMessagetype) => {
  return (
    <div
      id={'hw1-friend-message-' + props.message.id}
      className={s.friendMessage}
    >
      <div className={s.friendImageAndText}>
        <div className={`${s.friendText} ${AppStyle.textDialogs}`}>
          <div
            id={'hw1-friend-name-' + props.message.id}
            className={s.friendName}
          >
            {props.message.user.name}
            {/**/}
          </div>
          <div
            id={'hw1-friend-text-' + props.message.id}
            className={s.friendMessageText}
          >
            {props.message.message.text}

            {/**/}
          </div>
        </div>
        <div>
          <img
            id={'hw1-friend-avatar-' + props.message.id}
            src={props.message.user.avatar}
            alt="avatar"
          />
          <div
            id={'hw1-friend-time-' + props.message.id}
            className={s.friendTime}
          >
            {props.message.message.time}
          </div>
        </div>
      </div>
    </div >
  )
}

export default FriendMessage
