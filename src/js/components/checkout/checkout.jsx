import React from 'react';
import PropTypes from 'prop-types';
import CheckoutTable from './checkoutTable';
import Description from '../core/description';
import ButtonContainer from '../core/buttonContainer';
import Button from '../core/button';
import { Link } from 'react-router-dom';
import Loader from '../core/loader';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.clearCart = this.clearCart.bind(this);
    }

    clearCart() {
        let cart = window.localStorage.getItem("cart");
        if (cart && window.confirm("Are you sure you want to clear the cart")) {
            window.localStorage.removeItem("cart");
            this.props.actions.updateCart({});
            this.props.history.push("/");
        }
    }

    render() {        
        let table = null;
        if (this.props.items.length > 0) {
            table = <CheckoutTable items={this.props.items} updateCart={this.props.actions.updateCart} />;
        }
        return (
            <div className="checkout">
                {this.props.isFetching && <Loader />}
                <Description>
                    <div>
                        <p>Thank for shopping at the React Store</p>
                        <p>This is your shopping cart. You can edit and update your items here</p>
                    </div>
                </Description>
                {table}
                <ButtonContainer>
                    <Link to="/">
                        <Button class="backToStore" text="back to store" />
                    </Link>
                    <Button event={this.clearCart} class="clearCart" text="clear cart" />
                </ButtonContainer>
            </div>
        );
    }

    componentDidMount() {
        if (this.props.items.length == 0)
            this.props.actions.getDataRequest();
    }
}

Checkout.propTypes = {};

export default Checkout;