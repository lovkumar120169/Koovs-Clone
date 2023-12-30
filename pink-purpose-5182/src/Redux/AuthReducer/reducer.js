import {GET_NAME} from "./actionType"

const initState={
    userName:""
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case GET_NAME:
            return {...state,userName:payload}
        default:
            return state
    }
}