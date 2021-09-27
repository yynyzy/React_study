import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './index.css'

export default class Add extends Component {
    handlerKeyUp = (event) => {
        const { value } = event.target
        const { addTodo } = this.props
        if (event.keyCode !== 13) return
        if (value.trim() === '') return alert('输入为空')
        const todoObj = { id: uuidv4(), name: value, done: false, }
        //把todoObj传给父组件
        addTodo(todoObj)
        event.target.value = ''
    }
    render() {
        return (<input type="text" onKeyUp={this.handlerKeyUp} placeholder='请输入名称，回车确认' />)
    }
}