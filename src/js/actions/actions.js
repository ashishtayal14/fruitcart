import * as types from '../constants/constants.js'


export const getDataSuccess = (data) => ({ type: types.GET_DATA_SUCCESS, data })
export const getDataFailure = (message) => ({ type: types.GET_DATA_FAILURE, message })
export const getDataRequest = () => ({ type: types.GET_DATA_REQUEST })
export const updateCart = (cart) => ({type:types.UPDATE_CART,cart})
export const updateFilterKey = (key) => ({type:types.UPDATE_FILTER_KEY,key})


