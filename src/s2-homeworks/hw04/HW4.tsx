import React from 'react'
import s2 from '../../s1-main/App.module.css'
import Stand from './Stand'

const HW4 = () => {
    return (
        <div id={'hw4'}>
            <div className={s2.hwTitle}>Task #4</div>
            <div className={s2.hw}>
                <Stand />
            </div>
        </div>
    )
}

export default HW4
