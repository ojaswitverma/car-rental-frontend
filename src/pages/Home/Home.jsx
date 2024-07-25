import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreFleet from '../../components/ExploreFleet/ExploreFleet'
import CarDisplay from '../../components/CarDisplay/CarDisplay'
import Appdownload from '../../components/Appdownload/Appdownload'

const Home = () => {

    const [category, setCategory] = useState("All");

    return (
        <div>
            <Header />
            <ExploreFleet category={category} setCategory={setCategory} />
            <CarDisplay category={category} />
            <Appdownload />
        </div>
    )
}

export default Home
