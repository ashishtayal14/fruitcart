import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

class ButtonContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="button-container">
                {this.props.children}
            </div>
        );
    }
}

ButtonContainer.propTypes = {};

export default ButtonContainer;
