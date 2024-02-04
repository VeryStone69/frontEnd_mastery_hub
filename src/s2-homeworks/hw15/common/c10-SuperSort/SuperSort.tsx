import React from 'react'

// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'
const downIcon = '▼'; // Символ Юникода для стрелки вниз
const upIcon = '▲'; // Символ Юникода для стрелки вверх
const noneIcon = ' 🡘'; // Символ Юникода для двусторонней стрелки

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        return up;
    } else if (sort === up) {
        return '';
    } else {
        return down;
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <span id={id + '-sort-' + value} onClick={onChangeCallback}>
                <span id={id + '-icon-' + sort}>{icon}</span>
        </span>
        </span>
    )
}

export default SuperSort
