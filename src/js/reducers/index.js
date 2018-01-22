import { combineReducers } from 'redux'
import { shippingDetail, foodItems } from './reducer'

const shippingLabelMakerReducer = combineReducers({
  foodItems
})

export default shippingLabelMakerReducer
