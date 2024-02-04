import React from 'react'
import Clock from './Clock'
import s2 from '../../s1-main/App.module.css'

const HW9 = () => {
    return (
        <div id={'hw9'}>
            <div className={s2.hwTitle}>Task #9</div>

            <div className={s2.hw}>
                <Clock />
            </div>
        </div>
    )
}

export default HW9
