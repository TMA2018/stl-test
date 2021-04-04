import React, {Component} from 'react';
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import UserPageChange from '../user-page-change/user-page-change';

import './users-list-item.css';

export default class UserListItem extends Component {

    render() {
        const {name, phone, email, country, age, onDelete, onToggleImportant, important, onChangeUser} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';     
            
        if (important) {
            classNames += ' important';
        }

        return (
            <>
                <div className={classNames}>
                    <span 
                        className='app-list-item-label'
                        onClick={onToggleImportant}>
                        {name}, {phone}, {email}, {country}, {age}
                    </span>

                    <div className='d-flex justify-content-center align-items-center'>
                        <button 
                            type='button' 
                            className='btn-sm btn-pencil-o'
                            onClick={onChangeUser}
                        >
                            <i className='fa fa-pencil'></i>
                         </button>
                        {/* path='/users' component={UserPageChange}
                            <Link to='/users/:id'
                            /* component={UserPageChange} type='button' 
                        >
                            <i className='fa fa-pencil'></i>
                        </Link> */}
                        <button 
                            type='button' 
                            className='btn-star btn-sm'
                            onClick={onToggleImportant}>
                            <i className='fa fa-star'></i>
                        </button>
                        <button 
                            type='button' 
                            className='btn-sm btn-trash-o'
                            onClick={onDelete}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                </div>
            </>
        )
    }
}