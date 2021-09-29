import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
    keywordContainer = React.createRef()
    search = () => {
        const { value } = this.keywordContainer.current
        if (value.trim() === '') { return alert('Please enter') }
        PubSub.publish('Fabu', {
            isFirst: false,
            isLoading: true
        })

        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                //请求成功后，储存信息，取消加载状态
                PubSub.publish('Fabu', {
                    users: response.data.items,
                    isLoading: false
                })

            }, err => {
                PubSub.publish('Fabu', {
                    isLoading: false,
                    //此时的错误是个对象，所以不能在React中直接 {error} 展示，真正的错误是 err.message
                    error: err.message
                })

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
