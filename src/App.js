import { useState, useEffect, useMemo } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterSort from "./components/FilterSort";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import productData from "./data/products";
import "./styles/App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load product catalog on mount
  useEffect(() => {
    setProducts(productData);
  }, []);

  // Derive unique categories for the filter dropdown
  const categories = useMemo(() => {
    const unique = [...new Set(products.map((p) => p.category))];
    return unique.sort();
  }, [products]);

  // Filter and sort products based on current search, category, and sort state
  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    switch (sortOrder) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result = [...result].sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return result;
  }, [products, searchTerm, selectedCategory, sortOrder]);

  // Total number of items in cart (including quantities)
  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  // Total cart price using reduce()
  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortOrder("default");
  };

  return (
    <div className="app">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="app__main">
        <header className="app__hero">
          <h2 className="app__hero-title">Discover Amazing Products</h2>
          <p className="app__hero-subtitle">
            Search, filter, and shop from our curated collection
          </p>
        </header>

        <div className="app__controls">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <FilterSort
            categories={categories}
            selectedCategory={selectedCategory}
            sortOrder={sortOrder}
            onCategoryChange={setSelectedCategory}
            onSortChange={setSortOrder}
            onReset={handleResetFilters}
          />
        </div>

        <ProductList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
        />
      </main>

      <Cart
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemove={handleRemoveFromCart}
        totalPrice={totalPrice}
      />
    </div>
  );
}

export default App;
