//该文件是Count 的容器组件，用于连接 Count的  UI 与 redux
import React, { Component } from 'react'

//引入connect ，用于：连接UI与redux，生成容器
import { connect } from 'react-redux';

import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/actions/count'


//这里是定义UI组件
class Count extends Component {
    numval = React.createRef()
    add = () => {
        const { value } = this.numval.current
        this.props.add(value * 1)
    }
    del = () => {
        const { value } = this.numval.current
        this.props.del(value * 1)
    }
    addifodd = () => {
        const { value } = this.numval.current
        if (this.props.sum % 2 !== 0) {
            this.props.add(value * 1)
        }

    }
    addASync = () => {
        const { value } = this.numval.current
        this.props.addAsync(value * 1, 1000)
    }
    render() {
        return (
            <div>
                <div>{this.props.sum}</div>
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


//mapStateToProps 函数返回值必须是一个对象
//返回的这个函数的 key 就是传递给UI组件的props的 key
//返回的这个函数的 value 就是传递给UI组件的props的 value

//mapStateToProps 函数主要与给UI传递状态
// const mapStateToProps = (state) => {
//     return {
//         sum: state
//     }
// }


//mapDispatchToProps 函数主要与给UI传递操作状态的方法
//完整写法
// const mapDispatchToProps = (dispatch) => ({
//     add: value => dispatch(createIncrementAction(value)),
//     del: value => dispatch(createDecrementAction(value)),
//     addAsync: (value, delay) => dispatch(createIncrementAsyncAction(value, delay)),
// })


//精简写法
const mapDispatchToProps =
{
    add: createIncrementAction,
    del: createDecrementAction,
    addAsync: createIncrementAsyncAction

}

// const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)
// export default CountContainer

export default connect(
    //映射状态
    state => ({ sum: state }),
    //映射操作状态的方法
    mapDispatchToProps)(Count)
