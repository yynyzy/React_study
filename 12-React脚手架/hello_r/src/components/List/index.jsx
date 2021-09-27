import React, { Component } from 'react';
import Item from '../Item'
export default class List extends Component {


    render() {
        const { todos, deleteObj, changeItem, changecheckAll } = this.props;
        return (
            <ul>
                {todos.map((item) => {
                    return <Item
                        key={item.id}
                        obj={item}
                        deleteObj={deleteObj}
                        changeItem={changeItem}

                    />
                })}
            </ul>
        )
    }
}