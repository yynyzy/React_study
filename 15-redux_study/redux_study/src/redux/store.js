//该文件是创建redux中最重要的文件
import { createStore, applyMiddleware } from 'redux'
import count from '../redux/reducers/count'

//异步action加载需要的库
import thunk from 'redux-thunk'

//创建 并暴露 一个store
export default createStore(
    //需要 引入 applyMiddleware 函数来使用中间件
    count, applyMiddleware(thunk)
)


