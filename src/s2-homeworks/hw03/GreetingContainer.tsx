import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: (name: string) => void) => {
    name.trim() === ""
        ? setError("Ошибка! Введите имя!")
        : addUserCallback(name.trim());
    setName("")
}

export const pureOnBlur = (name: string, setError: any) => { // если имя пустое - показать ошибку
    if (name.trim() === "") setError("Ошибка! Введите имя!")
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
    if (e.key === "Enter") addUser()
}
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any

        // setName(e.currentTarget.value)
        const userText = e.currentTarget.value;
        if (userText !== "") {
            setName(e.currentTarget.value);
            setError('')
        } else {
            setName("")
            setError("Ошибка! Введите имя!")
        }
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
    const totalUsers = users.length // need to fix
    const lastUserName = users.length === 0 ? name : users[users.length - 1].name // need to fix

    return (
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
    )
}

export default GreetingContainer
