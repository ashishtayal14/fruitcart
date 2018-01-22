import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="pageDescription">
                {this.props.children}
            </div>
        );
    }
}

Description.propTypes = {};

export default Description;
