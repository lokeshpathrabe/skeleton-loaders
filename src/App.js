import ProductCard from "./components/ProductCard";
import nikeImage from "./assets/img/shoes-nike.jpeg";
import levisImage from "./assets/img/shoes-levis.jpeg";
import loafers from "./assets/img/loafers-roadster.jpeg";
import Headerbar from "./components/Headerbar";

const products = [
  {
    brand: "Nike",
    description: "Best in the world running shoes.",
    price: 4000,
    src: nikeImage,
  },
  {
    brand: "Levis",
    description: "Best in the world casual shoes.",
    price: 2000,
    src: levisImage,
  },
  {
    brand: "Roadster",
    description: "Best in the world loafers shoes.",
    price: 2000,
    src: loafers,
  },
];

function App() {
  return (
    <div className="App">
      <Headerbar />
      <section className="products">
        {products.map((product) => {
          return (
            <ProductCard
              brand={product.brand}
              description={product.description}
              price={product.price}
              src={product.src}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
