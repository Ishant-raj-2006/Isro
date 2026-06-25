import { FaSearch } from "react-icons/fa";

function SearchButton() {

  const handleSearch = () => {
    alert("Backend API will be connected here.");
  };

  return (
    <div className="search-container">

      <button
        className="search-btn"
        onClick={handleSearch}
      >
        <FaSearch />
        Search Similar Images
      </button>

    </div>
  );
}

export default SearchButton;