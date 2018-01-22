import { connect } from 'react-redux'
import Listing from '../components/list/list'
import { bindActionCreators } from 'redux'
import * as stateActions from '../actions/actions'

 const mapStateToProps = (state, props) => {
         return {
          items:state.foodItems.items,
          cart:state.foodItems.cart,
          filterKey:state.foodItems.filterKey,
          isFetching:state.foodItems.isFetching,
          errorMessage:state.foodItems.errorMessage,
        }
  }
 

const mapDispatchToProps = (dispatch) => {
      return {
       actions:bindActionCreators(stateActions, dispatch),       
    }
}

const ListContainer =connect(mapStateToProps, mapDispatchToProps)(Listing);
export default ListContainer
