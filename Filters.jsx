const filters = [
  "All Products","Bags","Shoes","Accessories","Wallet","Backpacks","Kids",
  "New Arrivals","Premium","Trending","Sports","Sale","More"
];

export default function Filters() {
  return (
    <div className="filters">
      <h3 className="filter-heading">Filter</h3>
      <ul>
        {filters.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
