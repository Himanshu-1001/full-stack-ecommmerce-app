import { useEffect, useState } from "react";
import "./Search.scss";
import { RiCloseLine } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = (props) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    let searchItem = useFetch(`/api/products?populate=*&filters[Title][$contains]=${search}`);

    return (
        <div className="search-container">
            <div className="search-input-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={search}
                    onChange={handleChange}
                />
                <button className="close-icon" onClick={() => {
                    navigate('/');
                }}>
                    <RiCloseLine />
                </button>
            </div>

            <div className="search-results">
                {searchItem?.map((item) => {
                    return (
                        <div className="search-item" key={item.id} onClick={() => navigate(`/products/${item.id}`)}>
                            <img src={process.env.REACT_APP_BASE_URL + item.attributes.img.data[0].attributes.url} className="search-item-image" />
                            <div className="search-item-details">
                                <h3>{item.attributes.Title}</h3>
                                <p>{item.attributes.Description[0].children[0].text}</p>
                            </div>
                        </div>

                    );
                })}
            </div>
        </div>
    );
};

export default Search;
