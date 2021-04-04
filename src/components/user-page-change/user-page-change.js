import React, {Component} from 'react';
import Service from '../service/service';
import './user-page-change.css';

export default class UserPageChange  extends Component {
    service = new Service();
    state = {
        name: '',
        phone: '', 
        email: '', 
        country: '', 
        age: ''
    }

    onNameChange = (evt) => {
        this.setState( {
            name: evt.target.value
        });
    }
    onPhoneChange = (evt) => {
        this.setState( {
            phone: evt.target.value
        });
    }
    onMailChange = (evt) => {
        this.setState( {
            email: evt.target.value
        });
    }
    onCountryChange = (evt) => {
        this.setState( {
            country: evt.target.value
        });
    }
    onAgeChange = (evt) => {
        this.setState( {
            age: evt.target.value
        });
    }
    onSubmit = (evt) => {
        evt.preventDefault();
        let r = this.state.name.length;
        let d = this.state.email.length;
        let t = this.state.phone.length;

        if ( r === 0 || d === 0 || t === 0 ) {
            alert('write correct data');
        } else {
            this.props.onAdd(this.state.name, this.state.phone, this.state.email,this.state.country, this.state.age);
        }
        //this.props.onAdd();
        this.setState({
            name: '',
            phone: '', 
            email: '', 
            country: '', 
            age: ''
        })
    }

    render () {
        return (
            <form 
                className='bottom-panel d-flex'
                onSubmit={this.onSubmit}>
                <input
                    type='text'
                    placeholder='write name'
                    className='form-control new-reminder-label'
                    onChange={this.onNameChange}
                    value={this.state.name}
                />
                <input
                    type='text'
                    placeholder='write phone'
                    className='form-control new-reminder-label'
                    onChange={this.onPhoneChange}
                    value={this.state.phone}
                />
                <input
                    type='text'
                    placeholder='write mail'
                    className='form-control new-reminder-label'
                    onChange={this.onMailChange}
                    value={this.state.email}
                />
                <input
                    type='text'
                    placeholder='write country'
                    className='form-control new-reminder-label'
                    onChange={this.onCountryChange}
                    value={this.state.country}
                />
                <input
                    type='text'
                    placeholder='write age'
                    className='form-control new-reminder-label'
                    onChange={this.onAgeChange}
                    value={this.state.age}
                />
                <button
                    type='submit'
                    className='btn btn-online-secondary'
                    //onClick={() => onAdd('Hello')}
                >add user</button>
            </form>
        )
    }
}