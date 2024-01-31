import "./SingleProduct.scss";
import img from '../../assets/products/earbuds-prod-1.webp'
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchData from "../../utils/api";
import useFetch from "../../hooks/useFetch";

const SingleProduct = () => {
    const {id}=useParams();
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

    return (
        
        singleProduct && <div className="single-products-section">
            <div className="product">
                <div className="product-image">
                    <img src={process.env.REACT_APP_BASE_URL + singleProduct[0].attributes.img.data[0].attributes.url} alt="Product" />
                </div>
                <div className="product-details">
                    <h2 className="product-title">{singleProduct[0].attributes.Title}</h2>
                    <p className="product-price">{singleProduct[0].attributes.Price}</p>
                    <p className="product-description">
                    {singleProduct[0].attributes.Description[0].children[0].text}
                    </p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>

            <RelatedProducts id={singleProduct[0].attributes.category.data.id} />
        </div>
    );
};

export default SingleProduct;
