import React, { useRef } from 'react'
import Modal from '../'
import './index.css'

import { formatDateTime } from '../../../libs/utils'

export default function EditModal(props) {
    const { isShowEditModal, data, submitEdit } = props,
        editRef = useRef(),
        checkRef = useRef()


    const formatNewData = () => {
        const val = editRef.current.value.trim()
        const vlen = val.length
        if (vlen === 0) {
            editRef.current.value = data.content
            return;
        }
        const newData = {
            id: new Date().getTime(),
            content: val,
            isCompleted: checkRef.current.checked
        }
        submitEdit(newData, data.id)
    }
    return (
        <Modal
            modalTitle='编辑事件'
            isShowModal={isShowEditModal}
        >
            <p className='topic'>时间：{formatDateTime(data.id)}</p>
            <p className='topic'>
                <textarea ref={editRef} defaultValue={data.content} className='text-area'></textarea>
            </p>
            <p className='topic'>
                <input type='checkbox' defaultCheck={data.isCompleted ? true : false} ref={checkRef}></input>
            </p>
            <button className='btnModal' onClick={formatNewData}>确定</button>
        </Modal>

    )
}
