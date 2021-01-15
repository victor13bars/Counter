import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {changeMaxAC, changeStartAC, DisplayInputReducersTypes, resetAC, setAC} from "../redux/displayInput-reducer";
import {connect} from "react-redux";
import {Button} from "./Button";

let mapStateToProps = (state: AppStateType) => {
    return {
        name: state.input.buttonResetName,
        disabled: state.input.count === 0 || state.input.text !== ""
    }
}

let mapDispatchToProps = (dispatch: Dispatch<DisplayInputReducersTypes>) => {
    return {
        reset: () => {
            dispatch(resetAC())
        }
    }
}

const ButtonResetContainer = connect(mapStateToProps, mapDispatchToProps)(Button)
export default ButtonResetContainer