import "./Search.scss";
import { RiCloseLine } from 'react-icons/ri';


const Search = (props) => {
    return (
        <div className="search-container">
            <div className="search-input-container">
                <input
                    type="text"
                    placeholder="Search..."
                    // value={searchTerm}
                    // onChange={handleSearch}
                    className="search-input"
                />
                <button className="close-icon" onClick={() => {
                    props.search(false);
                }}>
                    <RiCloseLine />
                </button>
            </div>
            {/* <div className="search-results">
                <div className="search-item" key={result.id}>
                    <img src={result.image} alt={result.name} className="search-item-image" />
                    <div className="search-item-details">
                        <h3>{result.name}</h3>
                        <p>{result.description}</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Search;
