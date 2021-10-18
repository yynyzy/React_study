import React, { useRef } from 'react';
import './index.css';

export default function AddInput(props) {
    const { isShowInput, addItem } = props,
        InputRef = useRef()

    const submit = () => {
        if (InputRef.current.value.length === 0) return;
        addItem(InputRef.current.value)
    }
    return (
        <>
            {
                isShowInput && (
                    <div className='addInpit_wrapper'>
                        <input type="text" placeholder="请输入代办事件" ref={InputRef} />
                        <button className='btn-primary' onClick={submit}>增加</button>
                    </div>

                )
            }
        </>
    )
}