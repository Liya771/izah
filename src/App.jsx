import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ComboGrid from "./components/ComboGrid";
import ProductGrid from "./components/ProductGrid";
import ProductModal from "./components/ProductModal";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import "./App.css";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const openProductModal = (product) => setSelectedProduct(product);
  const closeProductModal = () => setSelectedProduct(null);

  return (
    <>
      <Header openCart={() => setCartOpen(true)} />

      <Hero />

      <section id="combos" className="section-spacing">
        <ComboGrid openProduct={openProductModal} />
      </section>

      <div className="section-spacing">
        <ProductGrid category="necklaces" openModal={openProductModal} />
        <ProductGrid category="earrings" openModal={openProductModal} />
        <ProductGrid category="bracelets" openModal={openProductModal} />
        <ProductGrid category="rings" openModal={openProductModal} />
      </div>

      <Footer />

      {selectedProduct && (
        <ProductModal product={selectedProduct} close={closeProductModal} />
      )}

      {cartOpen && <CartModal close={() => setCartOpen(false)} />}
    </>
  );
}
