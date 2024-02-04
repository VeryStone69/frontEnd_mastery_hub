import React from 'react'
import Message from './message/Message' //
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'


export type Message0Type = {
    text: string
    time: string
}
export type UserType = {
    avatar: string
    name: string
}
export type MessageType = {
    id: number
    user: UserType
    message: Message0Type
}

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'VeryStone',
    },
    message: {
        text: 'Thanks a lot',
        time: '22:00',
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar,
        name: 'Rustem',
    },
    message: {
        text: 'We, as frontend developers, should always help each other!',
        time: '22:01',
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Task #1</div>
            <div className={s2.hw}>
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
