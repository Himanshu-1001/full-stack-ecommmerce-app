import "./Cart.scss";
import { RiCloseLine } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Cart = (props) => {
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
                <div className="cart-body">
                    <p>Your cart is empty.</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
