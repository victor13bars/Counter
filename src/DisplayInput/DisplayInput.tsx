import React, {ChangeEvent, useEffect} from 'react';
import './DisplayInput.css';
import {CacheType, restoreState, saveState} from "../localStorage/localStorage";
import {useSelector} from "react-redux";
import {DisplayInputStateType} from "../redux/displayInput-reducer";
import {AppStateType} from "../redux/redux-store";

type DisplayInputType = {
    changeMax: (max: number) => void
    changeStart: (start: number) => void
    // disableBtn2: boolean
    disable: boolean
    start: number
    max: number
    setText: (value: string) => void
    // setDisableBtn2: (disableBtn2: boolean) => void
    setDisable: (disable: boolean) => void
}

export function DisplayInput(props: DisplayInputType) {


const max = useSelector<AppStateType,number>(state => state.input.max)
    const start = useSelector<AppStateType,number>(state => state.input.start)

    let onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {

        let start = +e.currentTarget.value;
        saveState<CacheType>("test", {x: start, y: max})
        props.changeStart(start);
        props.setText("enter values and enter 'set' ")

        if (start === props.max || props.max < start || start < 0) {
            props.setText('Incorrect Value')
            props.setDisable(true)
        } else {
            props.setDisable(false);
        }

    }

    let onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {

        props.setText("enter values and enter 'set' ")
        let max = +e.currentTarget.value;
        props.changeMax(max);

        if (props.start === max || max < props.start || max < 0) {
            props.setText('Incorrect Value')
            props.setDisable(true)
        } else {
            props.setDisable(false);
        }
    }

    return (
        <div className="displayInput">
            <div>
                <span>Max Value:</span>
                <input
                    className={props.max === props.start || props.start < 0 || props.start > props.max ? "redInput" : "defaultInput"}
                    type="number"
                    value={max} onChange={onChangeMax}/>
            </div>
            <div>
                <span>Start Value:</span>
                <input
                    className={props.max === props.start || props.start < 0 || props.start > props.max ? "redInput" : "defaultInput"}
                    type="number" value={start} onChange={onChangeStart}/>
            </div>
        </div>
    )
}