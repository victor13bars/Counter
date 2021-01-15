import React from "react";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {changeMaxAC, changeStartAC, DisplayInputReducersTypes} from "../redux/displayInput-reducer";
import {connect} from "react-redux";

import {DisplaySpan} from "./DisplaySpan";

let mapStateToProps = (state: AppStateType) => {
    return {
        count: state.input.count,
        max: state.input.max,
        text:state.input.text
    }
}

let mapDispatchToProps = (dispatch: Dispatch<DisplayInputReducersTypes>) => {
    return {

    }
}

const DisplaySpanContainer = connect(mapStateToProps, mapDispatchToProps)(DisplaySpan)
export default DisplaySpanContainer