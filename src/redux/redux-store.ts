import {combineReducers, createStore, Store} from "redux";
import {displayInputReducer} from "./displayInput-reducer";


let reducers = combineReducers({
    input:displayInputReducer
    // span:displaySpanReducer
})

export let store:Store = createStore(reducers);
// @ts-ignore
window.store = store;
// @ts-ignore
console.log(window.store)
export type AppStateType = ReturnType<typeof reducers>

export default store;