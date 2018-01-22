import React from 'react';
import PropTypes from 'prop-types';
import Quantity from './quantity';

class DetailRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.removeFruitFromCart = this.removeFruitFromCart.bind(this);
    }

    removeFruitFromCart(){
        this.props.removeFruitFromCart(this.props.id);
    }

    render() {
        return (
            <tr>
                <td className="name">
                    {this.props.name}
                </td>
                <td>
                    <Quantity   qty={this.props.qty}
                                id={this.props.id} 
                                addToCart={this.props.addToCart} 
                                removeFromCart={this.props.removeFromCart} />
                </td>
                <td className="price">
                    ${this.props.price}
                </td>
                <td className="remove">
                    <span onClick={this.removeFruitFromCart}>X</span>
                </td>
            </tr>

        );
    }
}

DetailRecord.propTypes = {};

export default DetailRecord;
