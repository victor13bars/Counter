import React, {useState} from 'react';
import {Button} from "./Button";
import {DisplayInput} from "./DisplayInput/DisplayInput";
import {DisplaySpan} from "./DisplaySpan/DisplaySpan";
import "./App.css"

type StateType = {
     x: number
     y: number
 }

// вот вам функция для сохранения объектов в память браузера
// (данные в этом хранилище сохраняться даже при перезагрузке компа):
export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

// и вот вам функция для получения сохранённого объекта в памяти браузера:
export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}
function App() {
    // получем в переменную state объект из ячейки "test" или дэфолтный объект если ячейка пуста
    const state: StateType = restoreState<StateType>("test", {x: 0, y: 5});

    let [start, setStartValue] = useState<number>(state.x)
    let [max, setMaxValue] = useState<number>(state.y)

    let [count, setCount] = useState<number>(0)

    function addCount() {
        setCount(++count);
    }

    function resetCount() {
        setCount(0);
    }

    function changeStart(start: number) {
        setStartValue(start);
    }

    function changeMax(max: number) {
        setMaxValue(max);
        // validateValue()
    }

    function addDisplaySpan() {
        setCount(start);
        setText("")
        setDisableBtn2(!disableBtn2)
        // сохраняем объект типа StateType в ячейке "test"
        saveState<StateType>("test", {x: start, y: max});
    }

    let [text, setText] = useState<string>("")

    let [disable, setDisable] = useState(false)
    let [disableBtn2, setDisableBtn2] = useState(true)
    console.log(state)
    // function validateValue() {
    //
    //
    //
    //     //setText("enter values and enter 'set' ")
    //     // if (start < 0 || max === start) {
    //     //     debugger
    //     //     console.log('zalaeteli')
    //         setDisable(!disable)
    //          // setText("Incorrect values")
    //     //}
    // }

    return (
        <div className="wrapper">
            <div className="frame">
                <DisplayInput changeMax={changeMax} changeStart={changeStart} start={start} max={max}
                              setDisable={setDisable} disable={disable} setText={setText}  setDisableBtn2={setDisableBtn2} disableBtn2={disableBtn2}/>
                <div className="button">
                    <Button name="Set" addOrReset={addDisplaySpan} disabled={disableBtn2}/>
                </div>
            </div>

            <div className="frame">
                <DisplaySpan count={count} text={text} max={max}/>
                <div className="button">
                    <Button name="Inc" addOrReset={addCount} disabled={count === max || disable}/>
                    <Button name="Reset" addOrReset={resetCount} disabled={disable}/>
                </div>
            </div>
        </div>
    );
}

export default App;
