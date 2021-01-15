import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {changeMaxAC, changeStartAC, DisplayInputReducersTypes, incAC, setAC} from "../redux/displayInput-reducer";
import {connect} from "react-redux";
import {Button} from "./Button";

let mapStateToProps = (state: AppStateType) => {
    return {
        name: state.input.buttonIncName,
        disabled: state.input.buttonIncDisable || state.input.count === state.input.max || state.input.text !== ""
    }
}

let mapDispatchToProps = (dispatch: Dispatch<DisplayInputReducersTypes>) => {
    return {
        reset: () => {
            dispatch(incAC())
        }
    }
}

const ButtonIncContainer = connect(mapStateToProps, mapDispatchToProps)(Button)
export default ButtonIncContainer