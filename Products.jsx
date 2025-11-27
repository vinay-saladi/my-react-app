import { products } from "./data";

export default function Products() {
  return (
    <div className="products-grid">
      {products.map(item => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <p className="name">{item.name}</p>
          <p className="price">${item.price}</p>
        </div>
      ))}
    </div>
  );
}
