import "./Category.scss";

// import cat1 from '../../../assets/category/cat-1.jpg'
// import cat2 from '../../../assets/category/cat-2.jpg'
// import cat3 from '../../../assets/category/cat-3.jpg'
// import cat4 from '../../../assets/category/cat-4.jpg'

const Category = (props) => {

    return (

        <div className="category-section">
            {props.categories.map((item) => {
                return <div key={item.id} className="category">
                    <img src={process.env.REACT_APP_BASE_URL + item.attributes.img.data.attributes.url} alt="" />
                </div>
            })}
        </div>
    );
};

export default Category;
