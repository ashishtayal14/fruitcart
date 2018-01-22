import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let classes = this.props.class + " btn btn-info";
        return (
            <div onClick={this.props.event} className={classes}>
                {this.props.text}
            </div>
        );
    }
}

Button.propTypes = {};

export default Button;
