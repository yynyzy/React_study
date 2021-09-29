import React, { Component } from 'react'
import store from '../../redux/store'
export default class Count extends Component {

    numval = React.createRef()
    add = () => {
        const { value } = this.numval.current

        store.dispatch({ type: 'increment', data: value * 1 })
        this.forceUpdate()
    }
    del = () => {
        const { value } = this.numval.current
        store.dispatch({ type: 'decrement', data: value * 1 })

    }
    addifodd = () => {

        const { value } = this.numval.current
        if (store.getState() % 2 !== 0) {
            store.dispatch({ type: 'increment', data: value * 1 })
        }

    }
    addASync = () => {

        const { value } = this.numval.current
        setTimeout(() => {
            store.dispatch({ type: 'increment', data: value * 1 })
        }, 500)
    }
    render() {
        return (
            <div>
                <div>{store.getState()}</div>
                <select ref={this.numval} >
                    <option value="1">1</option>&nbsp;
                    <option value="2">2</option>&nbsp;
                    <option value="3">3</option>&nbsp;
                </select>&nbsp;
                <button onClick={this.add}>+</button>&nbsp;
                <button onClick={this.del}>-</button>&nbsp;
                <button onClick={this.addifodd}>奇数加</button>&nbsp;
                <button onClick={this.addASync}>异步加</button>&nbsp;
            </div>
        )
    }
}
