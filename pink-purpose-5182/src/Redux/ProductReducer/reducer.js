import { GET_PRODUCT_SUCCESS, GET_PRODUCT_REQUEST, GET_PRODUCT_FALIURE, FILTER_FUNCTION, FILTER_FUNCTION_CATEGOERY } from "./actionType.js";

const initState = {
    isLoading: false,
    isError: false,
    Products: [],
    brandfilter: [],
    categoeryfilter:[]
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_REQUEST:
            return { ...state, isLoading: true }
        case GET_PRODUCT_SUCCESS:
            return { ...state, isLoading: false, Products: payload }
        case GET_PRODUCT_FALIURE:
            return { ...state, isError: true }
        case FILTER_FUNCTION:
            return { ...state, brandfilter: payload }
        case FILTER_FUNCTION_CATEGOERY:
            return { ...state, categoeryfilter: payload }
        default:
            return state
    }
}