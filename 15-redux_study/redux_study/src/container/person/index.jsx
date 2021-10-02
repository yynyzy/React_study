import React, { Component } from 'react'

import { connect } from 'react-redux'

import { createPersonAction } from '../../redux/actions/person'
class Person extends Component {
    state = {
        name: '',
        age: ''
    }
    //对象式的setState
    saveData = type => event => this.setState(
        { [type]: event.target.value },
        () => {
            console.log(this.state.name); //setState的第二个参数是回调函数，this.state.name是最新的，不会受 setstate 异步影响
        })
    addPerson = () => {

        const { name, age } = this.state
        this.props.addP({ name, age })
    }
    render() {
        return (
            <div>
                <p>----------------我是Person组件-------------</p>
                <div>我读取Count组件的和是：{this.props.sum}</div>
                <input type="text" placeholder="请输入名字" onChange={this.saveData('name')} />
                <input type="text" placeholder="请输入年龄" onChange={this.saveData('age')} />
                <button onClick={this.addPerson}>添加人</button>
                {this.props.yidiren.map((p, i) => {
                    return <div key={i}>{p.name}-{p.age}</div>
                })}
            </div>
        )
    }
}

export default connect(
    state => ({
        sum: state.count,
        yidiren: state.person
    }),
    {
        addP: createPersonAction
    }
)(Person)