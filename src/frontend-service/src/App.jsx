import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation.jsx";
import ProductList from "./Components/ProductList.jsx";
import Product from "./Components/Product.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const products = [
    {
      id: 1,
      image:
        "https://cymbal-shops.retail.cymbal.dev/static/img/products/sunglasses.jpg",
      name: "Product 1",
      description: "This is a great product!",
      price: 19.99,
    },
    {
      id: 2,
      image:
        "https://cymbal-shops.retail.cymbal.dev/static/img/products/tank-top.jpg",
      name: "Product 2",
      description: "This is another great product!",
      price: 29.99,
    },
  ];

  return (
    <>
      <Navigation cartCount={cartCount} onAddToCart={handleAddToCart} />
      <Routes>
        <Route path="/" exact element={<ProductList products={products} />} />
        <Route
          path="/product/:id"
          element={
            <Product cartCount={cartCount} setCartCount={setCartCount} />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
