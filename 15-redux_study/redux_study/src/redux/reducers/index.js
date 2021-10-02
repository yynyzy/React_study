//用于汇总所有的reducer
import { combineReducers } from 'redux'
import count from './count'
import person from './person'

//用于合并多个reducer 再传给createStore
export default combineReducers({
    count,
    person
})