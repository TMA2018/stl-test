import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import UserStatusFilter from '../user-status-filter/user-status-filter';
import UsersList from '../users-list/users-list';
import UserAddForm from '../user-add-form/user-add-form';
import Service from '../service/service';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserPageChange from '../user-page-change/user-page-change';

import './app.css';

export default class App extends Component {
    constructor(){
        super();
        this.maxId = 6;
        this.urldb = "http://localhost:3000/users";
    }

    makeUser2 = (name, phone, email, country, age, important=false, id) => {
        return {
            name: name,
            phone: phone,
            important: important,
            id: id,
            email: email,
            country: country,
            age: age
          // ...другие свойства
        };
    }
    service = new Service();

    state = {
        data: [],
        term: '',
        filter: 'all',
        loading: true
    }

    initialState() {
        this.service.getUsers(this.urldb)
            .then( 
                (users) => {
                    const newData = [];
                    this.setState( () => {
                        
                        users.forEach( ({name, phone, email, country, age, important, id}) => {
                            newData.push(this.makeUser2(name, phone, email, country, age, important, id));
                        });
                        return {
                            data: newData,
                            loading: false
                        }
                    });
                }
            )
            //.catch(console.log(`Failed to get resource`));
    }
    componentDidMount() {
        this.initialState();
    }

    deleteUser = (id) => {
        //console.log(id);
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);
            /*data.splice(index, 1);
            return {
                data: data
            }*/
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newData = [...before, ...after];
            return {
                data: newData
            }
        });
    }
    onChangeUser = (name, phone, email, country, age, important, id) => {
        const newUser = this.makeUser2(name, phone, email, country, age, important, id);
        //this.deleteUser(id);
        
        this.setState(({data}) => {
            //const newData = [...data, newUser];
            const index = data.findIndex((elem) => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            //console.log(after);
            const newData = [...before,newUser, ...after];
            /*this.service.setUser(this.urldb, newUser)
                .then(console.log('posting successful'))
                .catch(console.log(`posting to ${this.urldb} failure`));*/
            return {
                data: newData
            }
        });
        //this.initialState();
    }
    addUser = (name, phone, email, country, age, important) => {
        const newUser = this.makeUser2(name, phone, email, country, age, important, this.maxId++);
        this.service.setUser(this.urldb, newUser)
            .then(console.log('posting successful'))
            .catch(console.log(`posting to ${this.urldb} failure`));

        this.setState(({data}) => {
            const newData = [...data, newUser];
            return {
                data: newData
            }
        });
        //this.initialState();
    }

    onToggleProps(id, prop) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);
            const old = data[index];
            let newData = [];
            if (prop ==='important') {
                const newItem = {...old, important: !old.important}
                newData= [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            } 
            return {
                data: newData
            }
        });
    }

    onToggleImportant = (id) => {
        this.onToggleProps(id, 'important');
    }

    searchUsers(users, term) {
        if (term.length === 0) {
            return users
        }
        return users.filter((user) => {
            return user.name.toLowerCase().indexOf(term) > -1
        });
    }

    filterUsers(users, filter) {
        switch (filter) {
            //case 'expired': return users.filter(user => user.expired);
            case 'sort': return users.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);//sort by name
            case 'important': return users.filter(user => user.important);
            default: return users;
        };
    }
    
    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter, loading} = this.state;
        const important = data.filter(item => item.important).length;
        const allUsers = data.length;
        const visibleUsers = this.filterUsers(this.searchUsers(data, term), filter);

        return (
            <Router>
                
                <Route path='/:id' exact render={
                        ({match}) => {
                            const {id} = match.params;
                            //console.log(visibleUsers[id-1]);
                            return <UserPageChange 
                                userId={id} 
                                user={data[id-1]}
                                onChangeUser={this.onChangeUser}
                                />
                        }
                    } />

                <Route path='/' exact render={() => {return (
                    <div className='app'>
                    <AppHeader
                        allUsers={allUsers}
                        important={important}
                    />
                    <div className='search-panel d-flex'>
                        <SearchPanel
                            onUpdateSearch={this.onUpdateSearch}
                        />
                        <UserStatusFilter
                            filter={filter}
                            onFilter={this.onFilter}
                        />
                    </div>
                    <UsersList 
                        users = {visibleUsers}
                        loading = {loading}
                        onDelete = {this.deleteUser}
                        onToggleImportant = {this.onToggleImportant}
                        //onChangeUser = {this.onChangeUser}
                    />
                    <UserAddForm
                        onAdd={this.addUser}
                    />
                </div>)}}
                />
            </Router>
        )
    }
}
