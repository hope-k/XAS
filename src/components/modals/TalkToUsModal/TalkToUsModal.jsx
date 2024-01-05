import React, { useState } from 'react'
import './styles.css'
import InstantEnquiry from '../../tabs/InstantEnquiry/InstantEnquiry'
import GeneralEnquiry from '../../tabs/GeneralEnquiry/GeneralEnquiry'
import StrategySession from '../../tabs/StrategySession/StrategySession'
import { motion, AnimatePresence } from 'framer-motion'

const TalkToUsModal = ({ handleCloseModal }) => {
    const [activeTab, setActiveTab] = useState('instant-enquiry')

    const tabs = [
        { name: 'instant-enquiry', label: 'Instant Enquiry' },
        { name: 'strategy-session', label: 'Strategy Session' },
        { name: 'general-enquiry', label: 'General Enquiry' }
    ]

    const handleTabChange = (tabName) => {
        setActiveTab(tabName)
    }
    return (
        <motion.div
            animate={{
                opacity: [0, 1],

            }}
            exit={{
                opacity: [1, 0],

            }}
            className='modal-overlay'
        >
            <motion.div
                animate={{
                    opacity: [0, 1],
                    y: [-100, 0]
                }}
                exit={{
                    opacity: [1, 0],

                }}
                className="modal-content"
            >
                <span className="close-button" onClick={() => handleCloseModal(false)}>
                    <svg className='close-button-svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </span>

                <div className="modal-body">

                    <h1>We help you go Agile Three ways:</h1>
                    <h3>
                        Help you do it through Agile Coaching
                        <br />
                        Do it with you through Agile Consultancy
                        <br />
                        Do it for you through Agile Delivery

                    </h3>

                    <p>
                        Talk to us to see how we can help you Grow and scale your business.
                    </p>



                    {/* tabs */}
                    <ul>
                        {
                            tabs.map(({ name, label }, index) => (
                                <li onClick={() => handleTabChange(name)} key={name} className={`tab-${name}`}>
                                    <label htmlFor={name}>{label}</label>
                                    {
                                        (activeTab === name) ? <motion.div layoutId='label-underline' className={`label-underline`}></motion.div> : null
                                    }
                                </li>
                            ))
                        }
                    </ul>

                    {/* tab content */}
                    <div className='tab-content'>
                        {activeTab === 'instant-enquiry' && (<InstantEnquiry />)}

                        {activeTab === 'strategy-session' && (<StrategySession />)}

                        {activeTab === 'general-enquiry' && (<GeneralEnquiry />)}
                    </div>

                </div>
            </motion.div>
        </motion.div>
    )
}

export default TalkToUsModal