import "./Cart.scss";
import { RiCloseLine } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartItem from "./CartItem/CartItem";

import { Context } from "../../utils/context";
import { useContext} from "react";

const Cart = (props) => {
    const { cartItems, cartTotalAmount } = useContext(Context);

    return (
        <div className="cart-container">
            <div className="cart-button">
                <AiOutlineShoppingCart />
            </div>
            <div className="cart-content">
                <div className="cart-header">
                    <h3>Your Cart</h3>
                    <button onClick={() => {
                        props.cart();
                    }}>
                        <RiCloseLine />
                    </button>
                </div>
                {cartItems.length===0 ? <p>Your cart is empty.</p>
                 : cartItems.map((item) => {
                    return <CartItem
                        key={item.id}
                        id={item.id}
                        img={process.env.REACT_APP_BASE_URL + item.attributes.img.data[0].attributes.url}
                        Title={item.attributes.Title}
                        Price={item.attributes.Price}
                        qty={item.attributes.quantity}
                    />
                })}

                <div className="cart-footer">
                    <div className="total-amount">
                        <span>Total:</span>
                        <span>{cartTotalAmount}</span>
                    </div>
                    <button className="checkout-button">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
