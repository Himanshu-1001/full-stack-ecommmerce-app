import "./Header.scss";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";

import Cart from "../Cart/Cart";
import Search from "./Search/Search";


const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    
    function handleCart(){
        if(showCart===false){
            setShowCart(true);
        } else{
            setShowCart(false);
        }
    }

    return (
        <>
            <header className="main-header">
                <h1>My Store</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="nav-icons">
                    <IoSearch onClick={() =>{
                        setShowSearch(true);
                    }}/>
                    <span className="cart-icon" onClick={handleCart}>
                        <FaCartPlus />
                        <span>
                            10
                        </span>
                    </span>
                </div>
            </header>

            {showCart && <Cart cart={handleCart} />}
            {showSearch && <Search search={setShowSearch} />}
            
        </>
    )
};

export default Header;
