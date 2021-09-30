//该文件用于定义创建action函数的
import { INCREMENT, DECREMENT } from '../constant'

export const createIncrementAction = value => ({ type: INCREMENT, data: value })
export const createDecrementAction = value => ({ type: DECREMENT, data: value })

//异步action
export const createIncrementAsyncAction = (value, delay) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(value))
        }, delay)
    }
}