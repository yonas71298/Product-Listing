/**
 * Cart — slide-out panel showing cart items, total, and remove actions.
 */
import { formatPrice } from "../utils/currency";

function Cart({ cart, isOpen, onClose, onRemove, totalPrice }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={onClose} aria-hidden="true" />

      <aside className="cart" role="dialog" aria-label="Shopping cart">
        <header className="cart__header">
          <h2 className="cart__title">Your Cart</h2>
          <button className="cart__close" onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </header>

        <div className="cart__body">
          {cart.length === 0 ? (
            <p className="cart__empty">Cart is empty</p>
          ) : (
            <ul className="cart__items">
              {cart.map((item) => (
                <li key={item.id} className="cart__item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart__item-image"
                  />
                  <div className="cart__item-details">
                    <h4 className="cart__item-name">{item.name}</h4>
                    <p className="cart__item-price">
                      {formatPrice(item.price)}
                      {item.quantity > 1 && (
                        <span className="cart__item-qty"> × {item.quantity}</span>
                      )}
                    </p>
                  </div>
                  <button
                    className="cart__remove-btn"
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <footer className="cart__footer">
            <div className="cart__total">
              <span>Total</span>
              <span className="cart__total-price">{formatPrice(totalPrice)}</span>
            </div>
          </footer>
        )}
      </aside>
    </>
  );
}

export default Cart;
