/**
 * FilterSort — category filter, sort options, and reset controls.
 */
function FilterSort({
  categories,
  selectedCategory,
  sortOrder,
  onCategoryChange,
  onSortChange,
  onReset,
}) {
  return (
    <div className="filter-sort">
      <div className="filter-sort__group">
        <label htmlFor="category-filter" className="filter-sort__label">
          Category
        </label>
        <select
          id="category-filter"
          className="filter-sort__select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-sort__group">
        <label htmlFor="sort-order" className="filter-sort__label">
          Sort By
        </label>
        <select
          id="sort-order"
          className="filter-sort__select"
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A → Z</option>
          <option value="name-desc">Name: Z → A</option>
        </select>
      </div>

      <button className="filter-sort__reset" onClick={onReset}>
        Reset Filters
      </button>
    </div>
  );
}

export default FilterSort;
