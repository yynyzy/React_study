import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {
    // state = {
    //     users: [],
    //     isFirst: true,//受否初始展示
    //     isLoading: false,//标识是否加载中
    //     error: ''//储存错误信息
    // }
    // updateState = (obj) => {
    //     this.setState(obj)
    // }

    render() {
        return (
            <div className="container">
                {/* <Search updateState={this.updateState} /> */}
                <Search />
                {/* <List {...this.state} /> */}
                <List />
            </div>
        )
    }
}