import React from 'react'
import './index.css'
export default function Modal(props) {
    const { isShowModal, modalTitle, children } = props
    return (
        isShowModal && (
            <div className="modal">
                <div className="title">{modalTitle}</div>
                <div className="wrapper-content">
                    {children}
                </div>
            </div>
        )

    )
}
