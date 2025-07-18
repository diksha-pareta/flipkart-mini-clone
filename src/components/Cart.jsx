function Cart({ cart }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Cart Items ({cart.length})</h3>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
    </div>
  );
}
export default Cart;
