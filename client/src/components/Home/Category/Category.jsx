import "./Category.scss";
import { useNavigate } from "react-router-dom";
// import cat1 from '../../../assets/category/cat-1.jpg'
// import cat2 from '../../../assets/category/cat-2.jpg'
// import cat3 from '../../../assets/category/cat-3.jpg'
// import cat4 from '../../../assets/category/cat-4.jpg'

const Category = (props) => {
    const navigate=useNavigate();
    return (

        <div className="category-section">
            {props.categories?.map((item) => {
                return <div key={item.id} className="category" onClick={() => navigate(`/categories/${item.id}`)}>
                    <img src={process.env.REACT_APP_BASE_URL + item.attributes.img.data.attributes.url} alt="" />
                </div>
            })}
        </div>
    );
};

export default Category;
