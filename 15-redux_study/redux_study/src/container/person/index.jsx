import React, { Component } from 'react'

import { connect } from 'react-redux'
class Person extends Component {
    render() {
        return (
            <div>
                <p>----------------我是Person组件-------------</p>
                <div>我读取Count组件的和是：{this.props.sum}</div>
                <input type="text" placeholder="请输入名字" />
                <input type="text" placeholder="请输入年龄" />
                <div>Jack-78</div>
                <div>Tom-77</div>
                <div>Alice-45</div>
            </div>
        )
    }
}
export default connect(
    state => ({ sum: state })
)(Person)