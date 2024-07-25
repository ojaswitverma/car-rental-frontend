import React, { useContext, useEffect, useState } from 'react'
import "./ConfirmOrder.css"
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
import { Link } from "react-router-dom";

const ConfirmOrder = () => {

    const { url } = useContext(StoreContext);

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        contact_number: "",
        street: "",
        city: "",
        state: "",
        zip_code: "",
        date: "",
        number_of_days: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onConfirm = async (event) => {
        event.preventDefault()
        let newurl = url;
        newurl += "/api/booking/confirm";

        const response = await axios.post(newurl, data);

        alert("Booking confirmed successfully!");
    }

    // useEffect(() => {
    //     console.log(data);
    // }, [data])

    return (
        <form onSubmit={onConfirm} className='confirm-booking'>
            <div className="confirm-booking-left">
                <p className="title">Delivery information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First name' name='first_name' onChange={onChangeHandler} value={data.first_name} required />
                    <input type="text" placeholder='Last name' name='last_name' onChange={onChangeHandler} value={data.last_name} required />
                </div>
                <input type="email" placeholder='e-mail address' name='email' onChange={onChangeHandler} value={data.email} required />
                <input type="text" placeholder='Contact number' name='contact_number' onChange={onChangeHandler} value={data.contact_number} required />
                <input type="text" placeholder='Street' name='street' onChange={onChangeHandler} value={data.street} required />
                <div className="multi-fields">
                    <input type="text" placeholder='City' name='city' onChange={onChangeHandler} value={data.city} required />
                    <input type="text" placeholder='State' name='state' onChange={onChangeHandler} value={data.state} required />
                </div>
                <input type="text" placeholder='ZIP code' name='zip_code' onChange={onChangeHandler} value={data.zip_code} required />
            </div>
            <div className="confirm-booking-right">

                <p>Delivery date</p>
                <input type="date" name='date' onChange={onChangeHandler} value={data.date} required />
                <p>Number of days</p>
                <input type="number" placeholder='number of days' name='number_of_days' onChange={onChangeHandler} value={data.number_of_days} required />
                <Link to="/booking-confirmed"><button type='submit'>Proceed to payment</button></Link>

            </div>
        </form>
    )
}

export default ConfirmOrder
