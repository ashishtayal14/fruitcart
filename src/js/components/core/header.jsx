import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="header">
                <img src="../assets/images/store.jpg" className="media-photo" />
                <h1>REACT STORE</h1>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
