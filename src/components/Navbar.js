/**
 * Navbar — app title and cart icon with live item count.
 */
function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <span className="navbar__logo" aria-hidden="true">
          🛍️
        </span>
        <h1 className="navbar__title">ShopEase</h1>
      </div>

      <button
        className="navbar__cart-btn"
        onClick={onCartClick}
        aria-label={`Open cart with ${cartCount} items`}
      >
        <span className="navbar__cart-icon" aria-hidden="true">
          🛒
        </span>
        {cartCount > 0 && (
          <span className="navbar__cart-badge">{cartCount}</span>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
