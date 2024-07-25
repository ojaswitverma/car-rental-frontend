import React, { useContext } from 'react'
import "./CarDisplay.css"
import { StoreContext } from '../../context/StoreContext'
import Car from '../Car/Car'

const CarDisplay = ({ category }) => {

    const { car_list } = useContext(StoreContext)

    return (
        <div className='car-display' id="car-display">
            <div className="car-display-list">
                {car_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (<Car key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} category={item.category} transmission={item.transmission} fueltype={item.fueltype} seat={item.seat} />)
                    }
                })}
            </div>
        </div>
    )
}

export default CarDisplay
