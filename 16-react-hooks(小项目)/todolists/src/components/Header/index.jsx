import React from 'react'
import './index.css'
export default function Header(props) {
    const { openInput } = props
    return (
        <div className='header'>
            <h1>待办事项</h1>
            <div className='icon' onClick={openInput}>&#43;</div>
        </div>
    )
}
