import "./CartItem.scss";
import React, { useContext } from 'react';
import { RiCloseLine } from 'react-icons/ri';
// import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import { Context } from "../../../utils/context";

const CartItem = ({id, img, Title, Price, qty}) => {
    const { handleRemoveFromCart, handleCartQuantityControl } = useContext(Context);

    return (
        <div className="cart-item">
            <div className="product-info">
                <img src={img} alt={Title} className="product-img" />
                <div className="details-container">
                    <div className="product-details">
                        <h4 className="product-title">{Title}</h4>
                        <p className="product-price">{`${Price} * ${qty}`}</p>
                    </div>
                    <div className="quantity-controls">
                        <button className="quantity-btn decrement" onClick={() => handleCartQuantityControl("dec", id)}>-</button>
                        <span className="quantity">{qty}</span>
                        <button className="quantity-btn increment" onClick={() => handleCartQuantityControl("inc", id)}>+</button>
                    </div>
                </div>
                <div className="items-close-icon">
                    <RiCloseLine onClick={() => handleRemoveFromCart(id)}/>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
