import './Home.scss'
import Banner from './Banner/Banner'
import Category from './Category/Category';
import Products from '../Products/Products';

import { useContext, useEffect, useState } from 'react';
import { Context } from '../../utils/context';
import fetchData from '../../utils/api';
// import useFetch from '../../hooks/useFetch';


const Home = () => {
    const {catArr, setCatArr, products, setProducts} = useContext(Context);

    useEffect(() =>{
        getCategories();
        getProducts();
    }, []);

    const getCategories = async () =>{
        await fetchData('/api/categories?populate=*').then((res) =>{
            setCatArr(res.data);

        }).catch((error) =>{
            console.log(error);
        })
    }

    const getProducts = async () =>{
        await fetchData('/api/products?populate=*').then((res) =>{
            console.log(res);
            setProducts(res.data);

        }).catch((error) =>{
            console.log(error);
        })
    }

    
    return (
        <div>
            <Banner />
            <h2>Categories</h2>
            <Category categories={catArr} />
            <h2>Popular Products</h2>
            <Products products={products} />
        </div>
    );
};

export default Home;

// const getCategories = () =>{
    //    fetchData("/api/categories?populate=*").then((res) =>{
        //         setCatArr(res.data);
        //    })
        
        // }
        
        // const getProducts = () =>{
            //     fetchData("/api/products?populate=*").then((res) =>{
                //         console.log(res);
//     });
// }
                {/* <div className="category-section">
                    {catArr.map((item) =>{
                        return <Category img={process.env.REACT_APP_BASE_URL+item.attributes.img.data.attributes.url} />
                    })}
                </div> */}