import React from 'react';
import PropTypes from 'prop-types';
import DetailTable from './detailTable';
import Description from '../core/description';
import ButtonContainer from '../core/buttonContainer';
import Button from '../core/button';
import { Link } from 'react-router-dom';
import CheckoutButton from '../core/checkoutButton';
import Loader from '../core/loader';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.itemId = this.props.match.params.id;  
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);       
        this.getItem = this.getItem.bind(this);     
    }

    getItem(){
        let fruit = null;
        if(this.props.items && this.props.items.length>0){
            for(let item of this.props.items){
                if(item.id == this.itemId){
                    fruit = item;
                    break;
                }
            }
        }        
        return fruit;
    }

    addToCart() {
        let cart = window.localStorage.getItem("cart");
        if (cart) {
            cart = JSON.parse(cart);
            let itemQty = cart[this.itemId] || 0;
            itemQty = itemQty + 1;
            cart[this.itemId] = itemQty;
        }
        else {
            cart = {};
            cart[this.itemId] = 1;
        }
        window.localStorage.setItem("cart", JSON.stringify(cart));
        this.props.actions.updateCart(cart);
    }

    removeFromCart() {
        let cart = window.localStorage.getItem("cart");
        if (cart) {
            cart = JSON.parse(cart);            
            let itemQty = cart[this.itemId] || 0;
            itemQty = itemQty>0 ? itemQty - 1 : 0;
            cart[this.itemId] = itemQty;
        }
        window.localStorage.setItem("cart", JSON.stringify(cart));
        this.props.actions.updateCart(cart);
    }

    render() {
        let table = null;
        let fruit = this.getItem();
        if(this.props.items.length>0){                        
            table = <DetailTable itemId={this.itemId} items={this.props.items} updateCart={this.props.actions.updateCart}/>;
        }
        return (
            <div className="detail">
                {this.props.isFetching && <Loader />}
                <Description>
                    <div>
                        {   
                            this.props.items.length>0 && 
                            <img src={fruit.thumbnail} className="media-photo" />                            
                        }
                        {
                            this.props.items.length>0 &&
                            <span>{fruit.description}</span>
                        }
                    </div>
                </Description>
                {table}
                <ButtonContainer>
                    <Button event={this.addToCart} class="addToCart" text="add to cart"/>
                    <Button event={this.removeFromCart} class="removeFromCart" text="remove from cart"/>
                    <Link to="/">
                        <Button class="backToStore" text="back to store"/>
                    </Link>
                    <CheckoutButton class="checkout" text="Checkout"/>
                </ButtonContainer>                
            </div>
        );
    }
    componentDidMount(){
        if(this.props.items.length == 0)
            this.props.actions.getDataRequest();
    }   
}

Detail.propTypes = {};

export default Detail;
