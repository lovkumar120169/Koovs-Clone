import { GET_PRODUCT_SUCCESS,GET_PRODUCT_FALIURE,GET_PRODUCT_REQUEST,FILTER_FUNCTION,FILTER_FUNCTION_CATEGOERY } from "./actionType"


export const productGetSuccess=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload:payload}
}


export const productGetFaliure=()=>{
    return {type:GET_PRODUCT_FALIURE}
}


export const productGetRequest=()=>{
    return {type:GET_PRODUCT_REQUEST}
}

export const filterFunction=(payload)=>{
    console.log(payload)
    return {type:FILTER_FUNCTION,payload:payload}
}

export const filterFunctionCategoery=(payload)=>{
    console.log(payload)
    return {type:FILTER_FUNCTION_CATEGOERY,payload:payload}
}

