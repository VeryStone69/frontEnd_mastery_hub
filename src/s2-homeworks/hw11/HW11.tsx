import React, { useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'


function HW11() {
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 20))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    const change = (event: Event, value: number | number[]) => {
            if (Array.isArray(value)){
                setValue1(value[0])
                setValue2(value[1])
            }
            else {
                setValue1(value)
            }

        }

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Task #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.numberLeft}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            value={value1}
                            callback = {change}
                        />
                        <span id={'hw11-value-2'} className={s.numberRight}>100</span>
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.numberLeft}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            value={[value1,value2]}
                            callback = {change}
                        />
                        <span id={'hw11-value-2'} className={s.numberRight}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
