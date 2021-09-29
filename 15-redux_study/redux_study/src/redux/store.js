//该文件是创建redux中最重要的文件
import { createStore } from 'redux'
import count_reducer from './count_reducer'
const store = createStore(
    count_reducer
)
export default store

