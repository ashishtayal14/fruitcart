import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CheckoutButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let classes = this.props.class + " btn btn-info";
        return (
            <Link to="/checkout">
                <div className={classes}>
                    {this.props.text}
                </div>
            </Link>
        );
    }
}

CheckoutButton.propTypes = {};

export default CheckoutButton;
