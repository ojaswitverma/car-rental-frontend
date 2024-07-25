import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className='footer-content-left'>
                    <p>QuickDrive</p>
                    <p>Your trusted car rental partner. Enjoy a seamless booking experience,<br /> competitive rates, and exceptional customer service. <br />Drive with confidence!</p>
                    <div className="footer-social-icons">
                        <a href="" target='_blank'><img className="social-icon" src="/twitter.png" alt="" /></a>
                        <a href="" target='_blank'><img className="social-icon" src="/instagrampng.png" alt="" /></a>
                        <a href="" target='_blank'><img className="social-icon" src="/linkedin-logo.png" alt="" /></a>
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>Get in touch</h2>
                    <ul>
                        <li>080-5324-8234</li>
                        <li>contact@quickdrive.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>
                Copyright 2024 © QuickDrive.com - All rights reserved
            </p>
        </div>
    )
}

export default Footer
