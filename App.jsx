import Filters from "./Filters";
import Products from "./Products";

export default function App() {
  return (
    <div className="container">
      <aside className="sidebar">
        <Filters />
      </aside>

      <main className="content">
        <h2 className="title">DISCOVER OUR PRODUCTS</h2>
        <p className="subtitle">Discover curated selection across premium products</p>
        <Products />
      </main>
    </div>
  );
}
