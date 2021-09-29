// 该组件是定义count组件的Reducer

//Reducer可以初始化，加工状态
export default function count_reducer(preState = 0, action) {
    const { type, data } = action;
    console.log(preState, action)
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState + data
        default:  //不是加就是减，就是在进行初始化状态
            return preState
    }

}