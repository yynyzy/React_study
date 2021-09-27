import React, { Component } from 'react'
// import './add.css'

export default class Add extends Component {
    checkAll = (event) => {
        const { changecheckAll } = this.props;
        changecheckAll(event.target.checked)
    }
    render() {
        const { todos } = this.props
        const doneCount = todos.reduce((pre, cur) => {
            return pre + (cur.done ? 1 : 0)
        }, 0)
        return (
            <div style={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'space-between', width: '800px', height: '100px' }}>
                <input type="checkbox" checked={todos.length === doneCount && todos.length > 0} onChange={this.checkAll} />
                <div style={{ backgroundColor: 'white' }}>已完成：{doneCount}</div>
                <div style={{ backgroundColor: 'white' }}>全部：{todos.length}</div>
                <button>清除所有</button>
            </div>
        )
    }
}