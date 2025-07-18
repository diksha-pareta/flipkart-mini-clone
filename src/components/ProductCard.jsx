function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{ border: "1px solid gray", padding: 10 }}>
      <img
        src={product.image}
        alt={product.name}
        width="100%"
        height="150"
         style={{ objectFit: "cover", borderRadius: "4px" }}
        onError={(e) => {
          e.target.onerror = null; // Prevents infinite loop
          e.target.src = "https://via.placeholder.com/150";
        }}
      />
      <h3>{product.name}</h3>
      <p>₹{product.price} | ⭐ {product.rating}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
