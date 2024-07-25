import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
                <h2>
                    Rental cars at your fingertips
                </h2>
                <p>
                    Welcome to Quickdrive, your premier car rental service. We offer a diverse fleet of vehicles to suit every need and budget. From luxury cars to budget-friendly options, we ensure a seamless booking experience, competitive rates, and excellent customer support. Rent with us and hit the road with confidence!
                </p>
                <button>
                    View Fleet
                </button>
            </div>
        </div>
    )
}

export default Header
