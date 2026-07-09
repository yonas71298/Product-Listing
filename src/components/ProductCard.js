/**
 * ProductCard — displays a single product and handles add-to-cart.
 */
import { formatPrice } from "../utils/currency";

function ProductCard({ product, onAddToCart }) {
  const { name, price, category, image, description } = product;

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={image}
          alt={name}
          className="product-card__image"
          loading="lazy"
        />
        <span className="product-card__category">{category}</span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__description">{description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">{formatPrice(price)}</span>
          <button
            className="product-card__btn"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
