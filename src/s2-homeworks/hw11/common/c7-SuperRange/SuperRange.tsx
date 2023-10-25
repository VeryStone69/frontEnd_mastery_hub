import React from 'react'
import {Slider, SliderProps} from '@mui/material'

type PropsType = {
    callback: (event: Event, value: number | number[]) => void
    id: string
}

const SuperRange: React.FC<SliderProps & PropsType> = (props) => {
    const onChangeHandler = (event: Event, value: number | number[]) => {
        props.callback(event, value)
    }
    return (
        <>
            <Slider
                sx={{ // стили для слайдера // пишет студент
                    width: 550,
                }}
                onChange={onChangeHandler}
                {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
            />

        </>
    )
}

export default SuperRange
