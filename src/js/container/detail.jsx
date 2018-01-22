import { connect } from 'react-redux'
import Detail from '../components/details/detail'
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

const DetailContainer =connect(mapStateToProps, mapDispatchToProps)(Detail);
export default DetailContainer
