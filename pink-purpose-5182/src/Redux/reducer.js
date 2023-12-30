import { SINGLE_GET_FALIURE, SINGLE_GET_REQUEST, SINGLE_GET_SUCCESS } from "./actionType"

const initState={
    singleData:{},
    isLoading:false,
    isError:false
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case SINGLE_GET_REQUEST:
            return {...state,isLoading:true}
        case SINGLE_GET_SUCCESS:
            return {...state,isLoading:false,singleData:payload}
        case SINGLE_GET_FALIURE:
            return {...state,isError:true}
        default:
            return state
    }
}