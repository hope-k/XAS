import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const InstantEnquiry = () => {
    return (
        <div class="inquiry-container">
            <h1>Get Instant Support</h1>

            <div class="contact-options">
                <div class="whatsapp-option">
                    <img src="/assets/images/uk.svg" alt="UK Flag" />
                    <a href="https://wa.me/447580013780" >
                        UK WhatsApp
                    </a>
                </div>

                <div class="whatsapp-option">
                    <img src="/assets/images/ghana.svg" alt="Ghana Flag" />
                    <a href="https://wa.me/233501338581" >
                        GH WhatsApp
                    </a>
                </div>

                <div class="email-option">
                    <img src="/assets/images/simplemail.svg" alt="Email" />
                    <a href="mailto:info@xcels.com">
                        Email Us
                    </a>
                </div>
            </div>
        </div>
    )
}

export default InstantEnquiry