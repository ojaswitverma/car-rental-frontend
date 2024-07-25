import React, { useContext } from 'react'
import "./Car.css"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Car = ({ id, name, description, price, image, category, transmission, fueltype, seat }) => {

    const navigate = useNavigate()

    const { cartItems, addtocart } = useContext(StoreContext);

    return (
        <div className='car'>
            <div className="carimagecontainer">
                <img className='carimage' src={image} alt="" />
            </div>
            <div className='carinfo'>
                <div className="carinfotext">
                    <p>{name}</p>
                    {/* <p>{description}</p> */}
                    <p className='price'>{price}</p>
                </div>
                <div className='carinfoimg'>
                    <img src="/transmission.png" alt="" className="descimage" />
                    <p>{transmission}</p>
                    <img src="/fueltype.png" alt="" className="descimage" />
                    <p>{fueltype}</p>
                    <img src="/seat.png" alt="" className="descimage" />
                    <p>{seat}</p>
                </div>
                <div className="booknowbutton">
                    <Link to='/review'><button onClick={() => addtocart(id)}>Book Now</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Car
