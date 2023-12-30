import { GET_PRODUCT_SUCCESS_W, GET_PRODUCT_REQUEST_W, GET_PRODUCT_FALIURE_W, FILTER_FUNCTION_W, FILTER_FUNCTION_CATEGOERY_W } from "./actionType.js";

const initState = {
    isLoading: false,
    isError: false,
    Products: [],
    brandfilter: [],
    categoeryfilter:[]
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_REQUEST_W:
            return { ...state, isLoading: true }
        case GET_PRODUCT_SUCCESS_W:
            return { ...state, isLoading: false, Products: payload }
        case GET_PRODUCT_FALIURE_W:
            return { ...state, isError: true }
        case FILTER_FUNCTION_W:
            return { ...state, brandfilter: payload }
        case FILTER_FUNCTION_CATEGOERY_W:
            return { ...state, categoeryfilter: payload }
        default:
            return state
    }
}