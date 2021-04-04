import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component{

    state = {
        term: ''
    }

    onUpdateSearch = (evt) => {
        const term = evt.target.value.toLowerCase();
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input
                className='form-control search-input'
                    type='text'
                    placeholder='write user name'
                    onChange = {this.onUpdateSearch}
            />
        )
    }
}