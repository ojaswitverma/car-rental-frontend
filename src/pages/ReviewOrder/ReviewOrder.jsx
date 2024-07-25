import React, { useContext } from 'react'
import "./ReviewOrder.css"
import { StoreContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom'

const ReviewOrder = () => {

    const { cartItems, car_list, removefromcart } = useContext(StoreContext);

    return (
        <div className='review'>
            <div className="review-car">
                {car_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index} className="review-car-card">
                                <div className="review-car-card-header">
                                    <p>{item.name}</p>
                                    <p>{item.category}</p>
                                </div>
                                <div className="review-car-card-body">
                                    <img src={item.image} alt="" className="review-car-image" />
                                    <div className="review-car-card-body-description">
                                        <p>{item.description}</p>
                                        <p>The price to rent this car is {item.price}</p>
                                        <div className="review-car-card-body-description-image">
                                            <img className="review-car-desc-img" src="/transmission.png" alt="" />
                                            <p>{item.transmission}</p>
                                            <img className="review-car-desc-img" src="/fueltype.png" alt="" />
                                            <p>{item.fueltype}</p>
                                            <img className="review-car-desc-img" src="/seat.png" alt="" />
                                            <p>{item.seat}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons-div">
                                    <Link to="/booking"><button>Confirm your booking</button></Link>
                                    <Link to="/"><button onClick={() => removefromcart(item._id)}>Go back</button></Link>
                                </div>
                                {/* <p>{item.name}</p> */}
                            </div>

                        )
                    }
                })}
            </div>

        </div>
    )
}

export default ReviewOrder
