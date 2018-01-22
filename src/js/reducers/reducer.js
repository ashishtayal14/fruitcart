import * as actionTypes from '../constants/constants.js'


export const foodItems = (state = { items: [], isFetching: false, errorMessage: '', cart:{}, filterKey:'' }, action) => {
    switch (action.type) {

        case actionTypes.GET_DATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            }
            );

        case actionTypes.GET_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.data,
            }
            );

        case actionTypes.GET_DATA_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message,
            })

        case actionTypes.UPDATE_CART:
            return Object.assign({}, state, {cart : action.cart })
        
        case actionTypes.UPDATE_FILTER_KEY:
            return Object.assign({},state,{filterKey:action.key})

        default:
            return state;
    }
}

