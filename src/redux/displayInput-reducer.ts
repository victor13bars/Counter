import {CacheType, restoreState, saveState} from "../localStorage/localStorage";
import {useEffect} from "react";

export enum ACTIONS_TYPE {
    CHANGE_MAX = 'CHANGE_MAX',
    CHANGE_START = 'CHANGE_START',
    SET_TEXT = 'SET_TEXT',
    SET_DISABLE = 'SET_DISABLE',
    BUTTON_SET = 'BUTTON_SET',
    BUTTON_RESET = 'BUTTON_RESET',
    BUTTON_INC = 'BUTTON_INC',
    SET_STORAGE = 'SET_STORAGE'
}

export type DisplayInputStateType = {
    start: number,
    max: number,
    disable: boolean,
    count: number,
    text: string,
    buttonSetName: string,
    buttonSetDisable: boolean,
    buttonResetName: string,
    buttonResetDisable: boolean,
    buttonIncName: string,
    buttonIncDisable: boolean
}

let initialState = {
    start: 0,
    max: 1,
    disable: false,
    count: 0,
    text: "",
    buttonSetName: "Set",
    buttonSetDisable: false,
    buttonResetName: "Reset",
    buttonResetDisable: false,
    buttonIncName: "Inc",
    buttonIncDisable: true
}
export const displayInputReducer = (state: DisplayInputStateType = initialState, action: DisplayInputReducersTypes) => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_MAX:
            return {
                ...state,
                max: action.max
            }

        case ACTIONS_TYPE.CHANGE_START:
            return {
                ...state,
                start: action.start
            }

        case ACTIONS_TYPE.SET_TEXT:
            return {
                ...state,
                text: action.text
            }

        case ACTIONS_TYPE.SET_DISABLE:
            return {
                ...state,
                buttonSetDisable: action.disable
            }

        case ACTIONS_TYPE.BUTTON_SET:
            return {
                ...state,
                count: state.start,
                text: "",
                buttonIncDisable: false
            }
        case ACTIONS_TYPE.BUTTON_RESET:
            return {
                ...state,
                count: 0
            }

        case ACTIONS_TYPE.BUTTON_INC:
            return {
                ...state,
                count: ++state.count
            }
        case ACTIONS_TYPE.SET_STORAGE:
            return {
                ...state,
                max: action.locStorageState.y,
                start:action.locStorageState.x
            }
        default:
            return state
    }
}

export type ChangeMaxActionType = {
    type: ACTIONS_TYPE.CHANGE_MAX,
    max: number
}
export const changeMaxAC = (maxValue: number): ChangeMaxActionType => {
    return {
        type: ACTIONS_TYPE.CHANGE_MAX, max: maxValue
    }
}

export type ChangeStartActionType = {
    type: ACTIONS_TYPE.CHANGE_START,
    start: number
}
export const changeStartAC = (startValue: number): ChangeStartActionType => {
    return {
        type: ACTIONS_TYPE.CHANGE_START, start: startValue
    }
}

export type SetTextActionType = {
    type: ACTIONS_TYPE.SET_TEXT,
    text: string
}
export const setTextAC = (textValue: string): SetTextActionType => {
    return {
        type: ACTIONS_TYPE.SET_TEXT, text: textValue
    }
}

export type SetDisableActionType = {
    type: ACTIONS_TYPE.SET_DISABLE,
    disable: boolean
}
export const setDisableAC = (disableValue: boolean): SetDisableActionType => {
    return {
        type: ACTIONS_TYPE.SET_DISABLE, disable: disableValue
    }
}


export type SetActionType = {
    type: ACTIONS_TYPE.BUTTON_SET
}
export const setAC = (): SetActionType => {
    return {
        type: ACTIONS_TYPE.BUTTON_SET
    }
}

export type ResetActionType = {
    type: ACTIONS_TYPE.BUTTON_RESET
}
export const resetAC = (): ResetActionType => {
    return {
        type: ACTIONS_TYPE.BUTTON_RESET
    }
}

export type IncActionType = {
    type: ACTIONS_TYPE.BUTTON_INC
}
export const incAC = (): IncActionType => {
    return {
        type: ACTIONS_TYPE.BUTTON_INC
    }
}

export type setValuesFromLoalstorageActionType = {
    type: ACTIONS_TYPE.SET_STORAGE,
    locStorageState:CacheType
}

export const setValuesFromLoalstorageAC = (locStorageState:CacheType): setValuesFromLoalstorageActionType => {
    return {
        type: ACTIONS_TYPE.SET_STORAGE,
        locStorageState:locStorageState
    }
}

export type DisplayInputReducersTypes =
    ChangeMaxActionType
    | ChangeStartActionType
    | SetActionType
    | ResetActionType
    | IncActionType
    | SetTextActionType
    | SetDisableActionType
    |setValuesFromLoalstorageActionType;