/**
 * ProductList — responsive grid of filtered products with empty state.
 */
import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="product-list__empty">
        <span className="product-list__empty-icon" aria-hidden="true">
          🔍
        </span>
        <h2>No products found</h2>
        <p>Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <section className="product-list">
      <p className="product-list__count">
        Showing {products.length} product{products.length !== 1 ? "s" : ""}
      </p>
      <div className="product-list__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
