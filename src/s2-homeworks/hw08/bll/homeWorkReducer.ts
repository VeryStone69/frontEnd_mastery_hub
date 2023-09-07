import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const sortBy = (a: UserType, b: UserType) => {
                const nameA = a.name;
                const nameB = b.name;
                return action.payload === "up" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
            };

            return [...state].sort(sortBy);
        }
        case 'check': {
            return state.filter(el => el.age > 18);
        }
        default:
            return state;
    }
};
