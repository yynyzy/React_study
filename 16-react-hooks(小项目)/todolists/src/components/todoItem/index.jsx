import React from 'react';
import './index.css'
export default function TodoItem(props) {
    const { data, openCheckModal, openEditModal, completeItem, removeItem } = props;
    return (
        <li>
            <div className='checkBox'>
                <input type="checkbox"
                    checked={data.isCompleted}
                    onChange={() => { completeItem(data.id) }}
                />
            </div>
            <span className="Content"
                style={{ 'textDecoration': data.isCompleted ? 'line-through' : 'none' }}>
                {data.content}
            </span>
            <div className="btns">
                <button className='primary' onClick={() => openCheckModal(data.id)}>查看</button>
                <button className='warning' onClick={() => openEditModal(data.id)} >编辑</button>
                <button className='danger' onClick={() => removeItem(data.id)}> 删除</button>
            </div>
        </li >
    )
}