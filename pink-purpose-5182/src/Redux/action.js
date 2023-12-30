import { SINGLE_GET_FALIURE, SINGLE_GET_REQUEST, SINGLE_GET_SUCCESS } from "./actionType"


export const singleGetSuccess=(payload)=>{
    return {type:SINGLE_GET_SUCCESS,payload:payload}
}


export const singleGetFaliure=()=>{
    return {type:SINGLE_GET_FALIURE}
}


export const singleGetRequest=()=>{
    return {type:SINGLE_GET_REQUEST}
}