import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppState = (props) => {
    const [catArr, setCatArr] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotalItems, setCartTotalItems] = useState(0);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);

    const locate = useLocation();

    useEffect(() =>{
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [locate])

    useEffect(() =>{
        let totalQty=0;
        cartItems.forEach((item) => {
            totalQty+=item.attributes.quantity;
        })

        setCartTotalItems(totalQty);

        let amount=0;
        cartItems.forEach((item) =>{
            amount+=(item.attributes.Price * item.attributes.quantity);
        })

        setCartTotalAmount(amount);

    }, [cartItems])

    const handleAddToCart = (product, qty) => {
        let items = [...cartItems]
        let i = -1;

        items.forEach((item, index) => {
            if (item.id === product.id) {
                i=index;
                return i;
            }
        })

        if (i !== -1) {
            items[i].attributes.quantity += qty;
        } else {
            product.attributes.quantity = qty;
            items = [...items, product];
        }

        setCartItems(items);
    }


    const handleRemoveFromCart = (id) => {
        let items = [...cartItems];
        items = items.filter((item) => {
            if (item.id !== id) {
                return true;
            } else {
                return false;
            }
        })

        setCartItems(items);
    }


    const handleCartQuantityControl = (type, id) =>{
        let items = [...cartItems];
        let i=-1;
        items.forEach((item, index) =>{
            if(item.id===id){
                i=index;
                return;
            }
        })

        let val=items[i].attributes.quantity;
        if(type==="dec"){
            if(val!==1){
                val--;
            }
        } else{
            val++;
        }

        items[i].attributes.quantity=val;
        setCartItems(items);
    }


    return (
        <Context.Provider value={{
            catArr,
            setCatArr,
            products,
            setProducts,
            cartItems,
            setCartItems,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartQuantityControl,
            cartTotalItems,
            setCartTotalItems, 
            cartTotalAmount,
            setCartTotalAmount
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default AppState