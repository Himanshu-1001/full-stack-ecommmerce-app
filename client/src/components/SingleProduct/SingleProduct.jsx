import "./SingleProduct.scss";
// import img from '../../assets/products/earbuds-prod-1.webp'
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import fetchData from "../../utils/api";
import useFetch from "../../hooks/useFetch";
import { Context } from "../../utils/context";
// import { useLocation } from "react-router-dom";

const SingleProduct = () => {
    const { id } = useParams();

    const [quantity, setQuantity] = useState(1);

    const { handleAddToCart } = useContext(Context);

    // const locate = useLocation();
    // const [singleProduct, setSingleProduct] = useState([]);
    // const [loading, setLoading] = useState(false);
    // useEffect(() =>{
    //     getSingleProduct();
    // },[id])

    // const getSingleProduct = async () =>{
    // await fetchData(`/api/products?populate=*&filters[id]=${id}`).then((res) =>{
    //         console.log(res);
    //         setSingleProduct(res.data);
    //         setLoading(true);

    //     })

    // }

    const singleProduct = useFetch(`/api/products?populate=*&filters[id]=${id}`); //used useFetch custom hook.

    const handleDec = () => {
        setQuantity((prev) => {
            if (prev !== 1) {
                return prev - 1;
            } else {
                return prev;
            }
        })
    }

    const handleInc = () => {
        setQuantity(quantity + 1);
    }

    return (

        singleProduct && <div className="single-products-section">
            <div className="product">
                <div className="product-image">
                    <img src={process.env.REACT_APP_BASE_URL + singleProduct[0].attributes.img.data[0].attributes.url} alt="Product" />
                </div>
                <div className="product-details">
                    <h2 className="product-title">{singleProduct[0].attributes.Title}</h2>
                    <p className="product-price">{`Rs-${singleProduct[0].attributes.Price}`}</p>
                    <p className="product-description">
                        {singleProduct[0].attributes.Description[0].children[0].text}
                    </p>

                    <div className="quantity-section">
                        <button className="quantity-button" onClick={handleDec}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button className="quantity-button" onClick={handleInc}>+</button>
                    </div>
                    <button className="add-to-cart" onClick={() => {
                        handleAddToCart(singleProduct[0], quantity)
                        setTimeout(() =>{
                            alert("Item added to cart successfully");
                        },500)
                        setQuantity(1);
                    }}>Add to Cart</button>
                </div>
            </div>

            <RelatedProducts id={singleProduct[0].attributes.category.data.id} />
        </div>
    );
};

export default SingleProduct;
