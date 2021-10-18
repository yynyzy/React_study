import React from 'react'
import Modal from '../'
import { formatDateTime } from '../../../libs/utils'

import './index.css'

export default function CheckModal(props) {
    const { isShowCheckModal, data, closeModal } = props
    return (
        <Modal
            modalTitle='查看事件'
            isShowModal={isShowCheckModal}
        >
            <p className='topic'>时间：{formatDateTime(data.id)}</p>
            <p className='topic content-topic'>内容：{data.content}</p>
            <p className='topic'>状态：{data.isCompleted ? '已完成' : '未完成'}</p>
            <button className='btnModal' onClick={closeModal}>确定</button>
        </Modal>

    )
}
