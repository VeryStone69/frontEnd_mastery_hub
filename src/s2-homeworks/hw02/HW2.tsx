import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - описать типы AffairPriorityType, AffairType                           !!!OK!!!
* 2 - указать нужный тип для defaultAffairs                                 !!!OK!!!
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами   !!! OK!!!
* 4 - выполнить пункт 3 для функции deleteAffair                            !!!OK!!!
* 5 - указать нужный тип в useState с affairs                               !!!OK!!!
* 6 - дописать тип и логику функции deleteAffairCallback                    !!!OK!!!
* 7 - в файле Affairs.tsx дописать типизацию пропсов                        !!!OK!!!
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow    !!!OK!!!
* 9 - в файле Affair.tsx дописать типизацию пропсов
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать    !!!OK!!!
* 11 - в файле Affair.tsx отобразить приходящие данные                      !!!OK!!!
* */

// types
export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}

export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === "all") return affairs
    return affairs.filter(el => el.priority === filter)
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any
    return affairs.filter(el => el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => {
        setAffairs(deleteAffair(affairs, _id))
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
