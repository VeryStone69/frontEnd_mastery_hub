const initState = {
    isLoading: false,
}
export type InitStateType ={isLoading:boolean}
type LoadingACType =ReturnType <typeof loadingAC>

export const loadingReducer = (state:InitStateType = initState, action: LoadingACType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING":{
            return {...state, isLoading:action.isLoading}
        }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
}as const)
