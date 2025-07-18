function FilterBar({ onFilter }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <select onChange={(e) => onFilter("price", e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>
      <select onChange={(e) => onFilter("rating", e.target.value)} style={{ marginLeft: 10 }}>
        <option value="">Sort by Rating</option>
        <option value="high">High to Low</option>
      </select>
    </div>
  );
}
export default FilterBar;
