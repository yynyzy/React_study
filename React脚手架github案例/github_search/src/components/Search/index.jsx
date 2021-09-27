import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
    keywordContainer = React.createRef()
    search = () => {
        const { value } = this.keywordContainer.current
        if (value.trim() === '') { return alert('Please enter') }
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                this.props.saveUsers(response.data.items)
                console.log(response.data.items);
            }, err => {
                console.log(err);
            })
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading"> Github 用户搜索</h3>
                <div>
                    <input type="text" ref={this.keywordContainer} placeholder="请输入名称" />&nbsp;
                    <button onClick={this.search}> 搜索</button>
                </div>
            </section>
        )
    }
}
