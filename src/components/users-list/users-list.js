import React, {Component} from 'react';
import UsersListItem  from '../users-list-item/users-list-item';
import { ListGroup } from 'reactstrap';
import Spinner from '../spinner/spinner';

import './users-list.css';

export default class UsersList extends Component {

    render() {
        const {users, loading, onDelete, onToggleImportant, onChangeUser} = this.props;
        if (loading) {
            return <Spinner/>
        }
        
        const elems = users.map((item) => {
            const {id, ...itemProps} = item;

            return (
                <li key={id} className='list-group-item'>
                    <UsersListItem 
                        {...itemProps} 
                        onDelete={() => onDelete(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onChangeUser={() => onChangeUser(id)}
                        userId={id}
                    />
                </li>
            )
            
        });
        return (
            <ListGroup className='app-list'>
                {elems}
            </ListGroup>
        )
    }
}