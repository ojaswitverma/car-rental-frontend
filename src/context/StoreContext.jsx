import { createContext, useEffect, useState } from "react";
import { car_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const url = "http://localhost:4000";

    const [token, setToken] = useState("");

    const addtocart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removefromcart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    const contextValue = {
        car_list,
        cartItems,
        setCartItems,
        addtocart,
        removefromcart,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )


}

export default StoreContextProvider