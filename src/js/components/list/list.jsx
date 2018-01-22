import React from 'react';
import PropTypes from 'prop-types';
import ListTable from './listTable';
import Description from '../core/description';
import SearchBox from '../core/searchBox';
import CheckoutButton from '../core/checkoutButton';
import Loader from '../core/loader';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};        
    }
    componentDidMount(){
        if(this.props.items.length == 0)
            this.props.actions.getDataRequest();
    }    
    getFilteredItems(){

        let filterKey = this.props.filterKey;
        let items = this.props.items;
        if(filterKey){
            items = this.props.items.filter((item)=>{
                return item.title.toLowerCase().indexOf(filterKey.toLowerCase()) != -1 ? item : null;
            })
        }        
        return items;
    }
    render() {        
        console.log(this.props.isFetching);
        return (
            <div className="listing">
                {this.props.isFetching && <Loader />}                
                <Description>
                    <div>
                        <p>Welcome to React Store</p>
                        <p>Please choose the products and add them to the shopping cart.</p>
                        <p>When you are done click the shoppin cart icon to review your order and checkout</p>
                    </div>
                </Description>
                <SearchBox updateFilterKey={this.props.actions.updateFilterKey}/>
                <ListTable items={this.getFilteredItems()} updateCart={this.props.actions.updateCart}/>                
            </div>
        );
    }
}

List.propTypes = {};

export default List;
