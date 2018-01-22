import React from 'react';
import PropTypes from 'prop-types';

class Quantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.removeFromCart = this.removeFromCart.bind(this);
        this.addToCart = this.addToCart.bind(this);
        console.log(this.props);
    }

    removeFromCart(){
        console.log("remove");
        this.props.removeFromCart(this.props.id);
    }

    addToCart(){
        console.log("add");
        this.props.addToCart(this.props.id);
    }

    render() {
        return (
            <div className="col-lg-2 inc-dec">
                <div className="input-group">
                    <span className="input-group-btn">
                        <button onClick={this.removeFromCart} type="button" className="quantity-left-minus btn btn-danger btn-number">
                            -
                        </button>
                    </span>
                    <input value={this.props.qty} type="text" className="input-number" readOnly/>
                    <span className="input-group-btn">
                        <button onClick={this.addToCart} type="button" className="quantity-right-plus btn btn-success btn-number">
                            +
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

Quantity.propTypes = {};

export default Quantity;
