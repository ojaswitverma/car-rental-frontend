import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link, useNavigate } from "react-router-dom"
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setshowlogin }) => {

    // creating a state varaible

    const [menu, setMenu] = useState("home");

    const { token, setToken } = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

    return (
        <div className='navbar'>
            <Link to="/">
                <div className='weblogo'>
                    <img src={assets.logo} alt="" className='logo' />
                    <p>QuickDrive</p>
                </div>
            </Link>
            <ul className="navbar-menu">
                <Link to="/"><li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li></Link>
                <li onClick={() => setMenu("fleet")} className={menu === "fleet" ? "active" : ""}>Fleet</li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.searchicon} alt="" id="search-icon" />
                {!token ? <button onClick={() => setshowlogin(true)}>Log in</button> :
                    <div className='navbar-profile'>
                        <img src="/profile_icon.png" alt="" />
                        <ul className="navbar-profile-dropdown">
                            <li onClick={logout} > <img src="/logout_icon.png" alt="" /><p>Log out</p></li>
                            <div className='separator'></div>
                            <li><img src="" alt="" /><p>Dashboard</p></li>
                        </ul>
                    </div>}

            </div>
        </div>
    )
}

export default Navbar
