import React from 'react';

import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
//使用函数定义一个组件
export default class App extends React.Component {
  state = {
    todos: [
      { id: '01', name: 'aaaaaaaaaaa', done: false },
      { id: '02', name: 'bbbbbbbbbbb', done: true },
      { id: '03', name: 'ccccccccccc', done: false }
    ]
  }
  addTodo = (todoObj) => {
    //获取原数据
    const { todos } = this.state
    //更新数据  
    this.setState({ todos: [todoObj, ...todos] })
  }
  deleteObj = (id) => {
    const { todos } = this.state
    const newObj = todos.filter((todo, i) => { return todo.id !== id })
    this.setState({ todos: newObj })
  }
  changeItem = (id, done) => {
    const { todos } = this.state
    const newObj = todos.map((it) => {
      if (it.id === id) {
        it.done = done
      }
      return it
    })
    this.setState({ todos: newObj })
  }
  changecheckAll = (done) => {
    const { todos } = this.state
    const newtodos = todos.map((it) => ({ ...it, done }))
    this.setState({ todos: newtodos })
  }
  render() {
    return (
      <div className="App ">
        <Add addTodo={this.addTodo} />
        <List todos={this.state.todos} deleteObj={this.deleteObj} changeItem={this.changeItem} />
        <Footer todos={this.state.todos} changecheckAll={this.changecheckAll} />
      </div>
    )
  }
}


