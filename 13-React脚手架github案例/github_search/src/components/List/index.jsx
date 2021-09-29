import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'
export default class List extends Component {
    state = {
        users: [],
        isFirst: true,//受否初始展示
        isLoading: false,//标识是否加载中
        error: ''//储存错误信息
    }
    componentDidMount() {
        this.tokenID = PubSub.subscribe('Fabu', (_, data) => {
            this.setState(data)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.tokenID)
    }
    render() {
        const { users, isFirst, isLoading, error } = this.state
        return (
            <div className="row">
                {isFirst ? <h1>欢迎使用!</h1> :
                    isLoading ? <h1>Loading...</h1> :
                        error ? <h1>{error}</h1> :
                            users.map(user => {
                                return (
                                    <div className="card" key={user.id}>
                                        <a href={user.html_url} target="_blank" rel="noreferrer"  >
                                            <img alt='pic' src={user.avatar_url} style={{ width: '100px' }} /></a>
                                        <p className="card-text">{user.login}</p></div>
                                )
                            })
                }

            </div>
        )
    }
}
