import React from 'react'
import "./Thankyou.css"
import { Link } from "react-router-dom"

const Thankyou = () => {
    return (
        <div className='thank-you'>
            <div className="thank-you-card">
                <p>Your booking has been confirmed successfully!</p>
                <p>Thank you for choosing QuickDrive</p>
                <Link to="/"><button>Go to home page</button></Link>
            </div>

        </div>
    )
}

export default Thankyou
