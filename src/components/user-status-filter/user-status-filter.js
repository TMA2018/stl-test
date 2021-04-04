import React, { Component } from 'react';
import './user-status-filter.css';

export default class UserStatusFilter extends Component{
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All users'},
            {name: 'important', label: 'important'},
            {name: 'sort', label: 'sortByName'}
        ]
    }

    render() {
        
        const buttons = this.buttons.map( ({name, label}) => {
            const {filter, onFilter} = this.props;
            const active = filter === name;
            const status = active ? 'btn-info' : 'btn-outline-secondary';

            return (
                <button 
                    key = {name} 
                    type = 'button' 
                    className = {`btn ${status}`}
                    onClick={()=> onFilter(name)}
                >
                {label}</button>
            )
        });

        return (
            <div className='btn-group'>
               {buttons}
            </div>
        )
    }
}