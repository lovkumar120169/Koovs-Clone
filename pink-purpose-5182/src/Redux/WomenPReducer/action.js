import { GET_PRODUCT_SUCCESS_W,GET_PRODUCT_FALIURE_W,GET_PRODUCT_REQUEST_W,FILTER_FUNCTION_W,FILTER_FUNCTION_CATEGOERY_W } from "./actionType"


export const productGetSuccessW=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS_W,payload:payload}
}


export const productGetFaliureW=()=>{
    return {type:GET_PRODUCT_FALIURE_W}
}


export const productGetRequestW=()=>{
    return {type:GET_PRODUCT_REQUEST_W}
}

export const filterFunctionW=(payload)=>{
    console.log(payload)
    return {type:FILTER_FUNCTION_W,payload:payload}
}

export const filterFunctionCategoeryW=(payload)=>{
    console.log(payload)
    return {type:FILTER_FUNCTION_CATEGOERY_W,payload:payload}
}

