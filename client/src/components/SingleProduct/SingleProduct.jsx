import "./SingleProduct.scss";
import img from '../../assets/products/earbuds-prod-1.webp'
import RelatedProducts from "./RelatedProducts/RelatedProducts";

const SingleProduct = () => {
    return (
        <div className="single-products-section">
            <div className="product">
                <div className="product-image">
                    <img src={img} alt="Product" />
                </div>
                <div className="product-details">
                    <h2 className="product-title">Product Title</h2>
                    <p className="product-price">$99.99</p>
                    <p className="product-description">
                        This is a description of the product. Add more details about the product here.
                    </p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>

            <RelatedProducts />
        </div>
    );
};

export default SingleProduct;
