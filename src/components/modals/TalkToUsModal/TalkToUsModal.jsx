import React from 'react'
import './styles.css'

const TalkToUsModal = ({ handleCloseModal }) => {
    return (
        <div className='modal-overlay'>
            <div className="modal-content">
                <span className="close-button" onClick={() => handleCloseModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={'20px'} height={'20px'}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </span>

                <div className="modal-body">
                    talk to us
                </div>
            </div>
        </div>
    )
}

export default TalkToUsModal