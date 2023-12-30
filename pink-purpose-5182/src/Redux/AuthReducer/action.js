import {GET_NAME} from "./actionType"

export const getUserName=(payload)=>{
    return {type:GET_NAME,payload:payload}
}