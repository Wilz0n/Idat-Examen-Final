import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (item) => {
        const { id } = item;
        setCartItems((prev) => {
            const newItems = { ...prev };
            if (newItems[id]) {
                newItems[id].quantity += 1;
            } else {
                newItems[id] = { ...item, quantity: 1 };
            }
            return newItems;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newItems = { ...prev };
            if (newItems[itemId].quantity > 1) {
                newItems[itemId].quantity -= 1;
            } else {
                delete newItems[itemId];
            }
            return newItems;
        });
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
