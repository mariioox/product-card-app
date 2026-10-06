import ProductCard from "./ProductCard";
import "./App.css";

const productList = [
  { title: "Wireless Headphones", price: 80, inStock: true },
  { title: "Mechanical Keyboard", price: 120, inStock: false },
  { title: "USB-C Cable", price: 12, inStock: true },
];

function App() {
  return (
    <main className="app">
      <h1>Product Catalog</h1>
      <div className="products">
        {productList.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </main>
  );
}

export default App;
