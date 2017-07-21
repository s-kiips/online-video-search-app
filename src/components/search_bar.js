/**
 * Created by s-k-ii-p-s on 7/19/17.
 */

import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={event => this.onInputChange(event.target.value)}/>
                {/*value of the input: {this.state.term}*/}
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;