import "./Header.scss";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { useContext, useState } from "react";

import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    // const [showSearch, setShowSearch] = useState(false);
    
    const {cartTotalItems}  = useContext(Context);

    const navigate = useNavigate();
    
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
                <h1 onClick={() => navigate('/')}>My Store</h1>
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="nav-icons">
                    <IoSearch onClick={() =>{
                        navigate('/search')
                        // setShowSearch(true);
                    }}/>
                    <span className="cart-icon" onClick={handleCart}>
                        <FaCartPlus />
                        <span>
                            {cartTotalItems}
                        </span>
                    </span>
                </div>
            </header>

            {showCart && <Cart cart={handleCart} />}
            
        </>
    )
};

export default Header;
