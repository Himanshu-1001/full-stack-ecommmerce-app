import "./Product.scss";
import { Link } from "react-router-dom"

const Product = (props) => {
    return (
        <div>
            <img src={props.img} alt={props.img} style={{ height: '150px' }} />
            <div className="product-details">
                <h2>{props.Title}</h2>
                <p>{props.Price}</p>
            </div>
        </div>
    )
};

export default Product;
