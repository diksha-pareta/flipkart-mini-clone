import { useState } from "react";
import productsData from "./data/products";
import ProductList from "./components/ProductList";
import FilterBar from "./components/FilterBar";
import Cart from "./components/Cart";


function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleFilter = (type, value) => {
    let sorted = [...productsData];
    if (type === "price") {
      sorted.sort((a, b) => value === "low" ? a.price - b.price : b.price - a.price);
    } else if (type === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    setProducts(sorted);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🛒 Flipkart Mini Clone</h1>
      <FilterBar onFilter={handleFilter} />
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
    </div>
  );
}
export default App;
