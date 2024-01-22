import "./Products.scss";
import Product from "./Product/Product";

const Products = (props) => {
    return <div className="popular-products-section">
        <h1>Popular Products</h1>
        <div className="container">
            {props.products.map((item) => {
                return <div className="product">
                    <Product
                        key={item.id}
                        Title={item.attributes.Title}
                        Price={item.attributes.Price}
                        img={process.env.REACT_APP_BASE_URL + item.attributes.img.data[0].attributes.url}

                    />

                </div>
            })}
        </div>
    </div>;
};

export default Products;
