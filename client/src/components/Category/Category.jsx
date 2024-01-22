import "./Category.scss";
import Products from "../Products/Products"

const Category = () => {
    return (
        <div className="products-category-section">
            <div className="category-container">
                <h1>Category Title</h1>
                <Products />
            </div>
        </div>
    );
};

export default Category;
