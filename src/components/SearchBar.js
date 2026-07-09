/**
 * SearchBar — real-time, case-insensitive product name search.
 */
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="product-search" className="search-bar__label">
        Search Products
      </label>
      <input
        id="product-search"
        type="text"
        className="search-bar__input"
        placeholder="Search by product name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
