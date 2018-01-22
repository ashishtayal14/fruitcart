import { connect } from 'react-redux'
import Checkout from '../components/checkout/checkout'
import { bindActionCreators } from 'redux'
import * as stateActions from '../actions/actions'

const mapStateToProps = (state, props) => {
  return {
    items: state.foodItems.items,
    cart: state.foodItems.cart,
    filterKey: state.foodItems.filterKey,
    isFetching: state.foodItems.isFetching,
    errorMessage: state.foodItems.errorMessage,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(stateActions, dispatch),
  }
}


const CheckoutContainer = connect(mapStateToProps, mapDispatchToProps)(Checkout);
export default CheckoutContainer
