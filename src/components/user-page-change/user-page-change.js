import React, {Component} from 'react';
import Service from '../service/service';
import {Link} from 'react-router-dom';
import './user-page-change.css';

export default class UserPageChange  extends Component {
    //service = new Service();
/*
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
*/
    render () {
        const {userId, user} = this.props;
        return (      
          <>
            <Link to='/'>Back to users list</Link>
            <form 
                className='userChangeForm'
                onSubmit={this.onSubmit}>
                <label>Name</label>
                <input className='changeInput'
                    type='text'
                    label='name'
                    onChange={this.onNameChange}
                    value={user.name}
                />
                <label>Phone</label>
                <input className='changeInput'
                    type='text'
                    label='phone'
                    onChange={this.onPhoneChange}
                    value={user.phone}
                />
                <label>email
                    <input className='changeInput'
                    type='text'
                    label='email'
                    onChange={this.onMailChange}
                    value={user.email}
                /></label>
                <label>Country</label>
                <select
                    onChange={this.onCountryChange}
                    //value={this.state.country}
                >
                    <option value='Australia'>Australia</option>
                    <option selected value='USA'>USA</option>
                    <option value='USSR'>USSR</option>
                </select>
                <label>age
                <input className='changeInput'
                    type='number'
                    onChange={this.onAgeChange}
                    value={user.age}
                /></label>
                <button
                    type='submit'
                    className='btn btn-online-secondary'
                    //onClick={() => onAdd('Hello')}
                >save change</button>
            </form>
          </>
        )
    }
    
    /*render () {
        const {userId, user} = this.props; //{userId} {user}
        const {name, phone, email, country, age} = user; //{name}, {phone}, {email}, {country}, {age}
        return ( <h1> mr {userId} {name}, {phone}, {email}, {country}, {age}</h1>)
    }*/
}