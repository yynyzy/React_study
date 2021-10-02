import { ADDPERSON } from '../constant'

const initState = [
    { name: 'John', age: 18 },
    { name: 'Tom', age: 20 }
]

export default function person_reducer(preState = initState, action) {

    const { type, data } = action;

    switch (type) {
        case ADDPERSON:
            return [data, ...preState]
        default:
            return preState
    }
}