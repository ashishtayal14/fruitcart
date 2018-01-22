import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart() {
        let cart = window.localStorage.getItem("cart");
        if (cart) {
            cart = JSON.parse(cart);
            let itemQty = cart[this.props.item.id] || 0;
            itemQty = itemQty + 1;
            cart[this.props.item.id] = itemQty;
        }
        else {
            cart = {};
            cart[this.props.item.id] = 1;
        }
        window.localStorage.setItem("cart", JSON.stringify(cart));
        this.props.updateCart(cart);
    }
    render() {
        let detailLink = "/detail/" + this.props.item.id;
        return (
            <tr>
                <td className="thumbnail">
                    <Link to={detailLink}>
                        <img src={this.props.item.thumbnail} className="media-photo" />
                    </Link>
                </td>
                <td className="description">
                    <Link to={detailLink}>
                        <h4 className="title">
                            {this.props.item.title}
                        </h4>
                    </Link>
                    <span>{this.props.item.description}</span>
                </td>
                <td className="price">${this.props.item.price}</td>
                <td className="add">
                    <a onClick={this.addToCart}>add to cart</a>
                </td>
            </tr>

        );
    }
}

ListRecord.propTypes = {};

export default ListRecord;
