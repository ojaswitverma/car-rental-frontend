import React from 'react'
import "./ExploreFleet.css"
import { fleet } from '../../assets/assets'

const ExploreFleet = ({ category, setCategory }) => {
    return (
        <div className='explore-fleet' id="explorefleet">
            <h1>Explore our fleet</h1>
            <p className='explore-fleet-text'>Discover our diverse car fleet to suit every need and style</p>
            <div className="explore-fleet-list">
                {fleet.map((item, index) => {
                    return (
                        <div onClick={() => { setCategory(prev => prev === item.fleet_name ? "All" : item.fleet_name) }} key={index} className='explore-fleet-list-item'>
                            <img className={category === item.fleet_name ? "active" : ""} src={item.fleet_image} alt={item.fleet_name} />
                            <p>{item.fleet_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreFleet
