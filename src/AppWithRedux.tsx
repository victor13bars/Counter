import React, {useEffect, useState} from 'react';
import {Button} from "./Button/Button";
import {DisplayInput} from "./DisplayInput/DisplayInput";
import {DisplaySpan} from "./DisplaySpan/DisplaySpan";
import "./App.css"
import DisplayInputContainer from "./DisplayInput/DisplayInputContainer";
import DisplaySpanContainer from "./DisplaySpan/DisplaySpanContainer";
import ButtonSetContainer from "./Button/ButtonSetContainer";
import ButtonResetContainer from "./Button/ButtonResetContainer";
import ButtonIncContainer from "./Button/ButtonIncContainer";
import {CacheType, restoreState} from "./localStorage/localStorage";
import {useDispatch} from "react-redux";
import {setValuesFromLoalstorageAC} from "./redux/displayInput-reducer";

function AppWithRedux() {
   const dispatch = useDispatch()
useEffect(() => {
    const locStorageState: CacheType = restoreState<CacheType>("test", {x: 0, y: 2});
    console.log(locStorageState)
    dispatch(setValuesFromLoalstorageAC(locStorageState))

}, [])
    return (
        <div className="wrapper">
            <div className="frame">
                <DisplayInputContainer/>
                <div className="button">
                    <ButtonSetContainer/>
                </div>
            </div>

            <div className="frame">
                <DisplaySpanContainer/>
                <div className="button">
                    <ButtonIncContainer/>
                    <ButtonResetContainer/>
                </div>
            </div>
        </div>
    );
}

export default AppWithRedux;
