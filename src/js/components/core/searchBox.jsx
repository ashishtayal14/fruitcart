import React from 'react';
import PropTypes from 'prop-types';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateFilterKey = this.updateFilterKey.bind(this);
    }
    updateFilterKey(se){
        
        this.props.updateFilterKey(se.target.value);
    }
    render() {
        return (
            <div className="search">
                <label>Search :</label>
                <input onChange={this.updateFilterKey} type="text" placeholder="Type Search Text" className="searchBoxInput"/>
            </div>
        );
    }
}

SearchBox.propTypes = {};

export default SearchBox;
