import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {
    changeMaxAC,
    changeStartAC,
    DisplayInputReducersTypes,
    setDisableAC,
    setTextAC
} from "../redux/displayInput-reducer";
import {connect} from "react-redux";
import {DisplayInput} from "./DisplayInput";

let mapStateToProps = (state: AppStateType) => {
    return {
        start: state.input.start,
        max: state.input.max,
        disable: state.input.disable
    }
}

let mapDispatchToProps = (dispatch: Dispatch<DisplayInputReducersTypes>) => {
    return {
        changeStart: (start: number) => {
            dispatch(changeStartAC(start));
        },

        changeMax: (max: number) => {
            dispatch(changeMaxAC(max));
        },
        setText:(text:string) => {
            dispatch(setTextAC(text))
        },
        setDisable:(disable:boolean)=>{
            dispatch(setDisableAC(disable))
        }
    }
}

const DisplayInputContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayInput)
export default DisplayInputContainer