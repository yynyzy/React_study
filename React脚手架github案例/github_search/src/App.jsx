import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {
    state = {
        users: []
    }
    saveUsers = (newUsers) => {
        this.setState({ users: newUsers })
    }
    render() {
        return (
            <div className="container">
                <Search saveUsers={this.saveUsers} />
                <List users={this.state.users} />
            </div>
        )
    }
}