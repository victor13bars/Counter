import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {changeMaxAC, changeStartAC, DisplayInputReducersTypes, setAC} from "../redux/displayInput-reducer";
import {connect} from "react-redux";
import {Button} from "./Button";

let mapStateToProps = (state: AppStateType) => {
    return {
        name: state.input.buttonSetName,
        disabled: state.input.buttonSetDisable,
        max: state.input.max,
        start: state.input.start
    }
}

let mapDispatchToProps = (dispatch: Dispatch<DisplayInputReducersTypes>) => {
    return {
        reset: () => {

            dispatch(setAC())
        }
    }
}

const ButtonSetContainer = connect(mapStateToProps, mapDispatchToProps)(Button)
export default ButtonSetContainer