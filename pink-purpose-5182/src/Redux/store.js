import { combineReducers, legacy_createStore } from "redux"
import { reducer as SinglePageReducer } from "./reducer"
import { reducer as ProductReducer } from "./ProductReducer/reducer"
import {reducer as WomenProductReducer} from "./WomenPReducer/reducer"
import {reducer as AuthReducer} from "./AuthReducer/reducer"

const rootReducer=combineReducers({SinglePageReducer,ProductReducer,WomenProductReducer,AuthReducer})

export const store=legacy_createStore(rootReducer)