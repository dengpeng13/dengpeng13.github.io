import {combineReducers}  from "redux-immutable"
import {count} from "./count"


export const reducers = combineReducers({
    count:count
})