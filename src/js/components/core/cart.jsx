import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getTotalQtyAndPrice = this.getTotalQtyAndPrice.bind(this);
    }
    getTotalQtyAndPrice() {
        let cart = window.localStorage.getItem("cart");
        let qty = 0;
        let price = 0;
        if (cart) {
            cart = JSON.parse(cart);
            if (this.props.items) {
                for (var item of this.props.items) {
                    if (cart[item.id]) {
                        qty = qty + cart[item.id];
                        price = price + cart[item.id] * item.price;
                    }
                }
            }
        }
        return { "qty": qty, "price": price };
    }
    isItemInCart() {
        let cart = window.localStorage.getItem("cart");
        cart = JSON.parse(cart);
        let itemInCart = cart && cart[this.props.itemId] && cart[this.props.itemId] > 0 ? true : false;
        return itemInCart;
    }
    render() {
        let qtyAndPrice = this.getTotalQtyAndPrice();
        return (
            <div>
                <Link to="/checkout">
                    <img src="../assets/images/store.jpg" className="media-photo cartCheckoutImg" />
                    <span className="items"> {qtyAndPrice.qty} items</span>
                    <span className="price"> ${qtyAndPrice.price} </span>
                    <br />
                    {this.isItemInCart() && <span>this item is in the cart</span>}
                </Link>

            </div>
        );
    }
}

Cart.propTypes = {};

export default Cart;
