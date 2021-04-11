import React, {Component} from 'react';
import Service from '../service/service';
import {Link, withRouter} from 'react-router-dom';
import './user-page-change.css';

class UserPageChange  extends Component {
    service = new Service();

    state = {
        name: '',
        phone: '',
        email: '', 
        country: '', 
        age: '',
        important: '',
        id: ''
    }
    /*state = {
        name: this.props.user.name,
        phone: this.props.user.phone, 
        email: this.props.user.email, 
        important: this.props.user.important,
        country: this.props.user.country, 
        age: this.props.user.age,
        id: this.props.userId
    }*/
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
        //console.log(this.state.name);
        evt.preventDefault();
        const {name, phone, email,country, age, important, id} = this.state;
        let r = name.length;
        let d = email.length;
        let t = phone.length;

        if ( r === 0 || d === 0 || t === 0 ) {
            alert('write correct data');
        } else {
            //console.log(this.state.id);
            this.props.onChangeUser(name, phone, email, country, age,important, id);
        }
        this.props.history.push('/');
        //this.props.onAdd();name, phone, email, country, age, important=false, id
        /*this.setState({
            name: '',
            phone: '', 
            email: '', 
            country: '', 
            age: ''
        })*/
    }
    initialState = () => {
        const {user} = this.props;
        //const {user} = this.state;
        let {name, phone, email,country, age, important, id} = user; 

        this.setState( {     
            name: name,
            phone: phone, 
            email: email, 
            country: country, 
            age: age,
            important: important,
            id: id
        })
    };
    componentDidMount() {
        this.initialState()
    }
    render () {
        
        //this.props.userId
        let {name, phone, email,country, age} = this.state;
        return (      
          <>
            <Link to='/'>Back to users list</Link>
            <form 
                className='userChangeForm'
                onSubmit={this.onSubmit}
            >
                <label>Name</label>
                <input className='changeInput'
                    type='text'
                    label='name'
                    onChange={this.onNameChange}
                    value={name}
                />
                <label>Phone</label>
                <input className='changeInput'
                    type='text'
                    label='phone'
                    onChange={this.onPhoneChange}
                    value={phone}
                />
                <label>email
                    <input className='changeInput'
                    type='text'
                    label='email'
                    onChange={this.onMailChange}
                    value={email}
                /></label>
                <label>Country</label>
                <select
                    value={country}
                    onChange={this.onCountryChange}
                    //value={this.state.country}
                >
                    <option value='Australia'>Australia</option>
                    <option value='USA'>USA</option>
                    <option value='USSR'>USSR</option>
                </select>
                <label>age
                <input className='changeInput'
                    type='number'
                    onChange={this.onAgeChange}
                    value={age}
                /></label>
                <button
                    type='submit'
                    className='btn btn-online-secondary'
                    //onClick={() => this.props.history.push('/')}
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
export default withRouter(UserPageChange);