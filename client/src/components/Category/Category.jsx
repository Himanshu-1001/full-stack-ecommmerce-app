import "./Category.scss";
import Products from "../Products/Products"
import { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import fetchData from "../../utils/api";
import useFetch from "../../hooks/useFetch";

const Category = () => {
    const {id}=useParams();
    console.log(id)
    // const [prodCat, setProdCat] = useState([]);

    // useEffect(() =>{
    //     getCategory();
    // }, [])

    // const getCategory = async () =>{
    //     await fetchData(`/api/products?populate=*&filters[category][id]=${id}`).then((res) =>{
    //         console.log(res);
    //         setProdCat(res.data)
    //     })
    // }

    const prodCat = useFetch(`/api/products?populate=*&filters[category][id]=${id}`); //used useFetch hook
    console.log(prodCat);
    return (
        <div className="products-category-section">
            <div className="category-container">
                {prodCat && <h1>{prodCat[0]?.attributes.category.data.attributes.Name}</h1>}
                <Products  products={prodCat}/>
            </div>
        </div>
    );
};

export default Category;
