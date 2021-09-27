import React, { Component } from 'react'

export default class Item extends Component {

    changecheck = (id) => {
        const { changeItem } = this.props
        return (event) => {
            changeItem(id, event.target.checked)
        }
    }
    handledel = (id) => {
        const { deleteObj } = this.props
        return () => {
            if (window.confirm('是否删除')) {
                deleteObj(id)
            }
        }

    }
    render() {
        const { obj } = this.props

        return (
            <li>
                <label >
                    <input type="checkbox" checked={obj.done} onChange={this.changecheck(obj.id)} />
                    <span>{obj.name}</span>
                </label>
                <button onClick={this.handledel(obj.id)}>删除</button>
            </li>
        )

    }
}

