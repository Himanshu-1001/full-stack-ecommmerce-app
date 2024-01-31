import useFetch from '../../../hooks/useFetch';
import Products from '../../Products/Products';
// import './RelatedProducts.scss'

const RelatedProducts = (props) => {
    const relatedProduct=useFetch(`/api/products?populate=*&filters[category][id]=${props.id}`)
    return (
        <div className="related-products-section">
            <h2>Related Products</h2>
            <Products products={relatedProduct}/>
        </div>
    );
};

export default RelatedProducts;
