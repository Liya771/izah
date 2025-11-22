import React from "react";
import { products } from "../data";

export default function ProductGrid({ category, openModal }) {
  const filtered = products.filter((p) => p.category === category);

  return (
    <section id={category} className="category-section">
      <h3 className="category-heading">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h3>

      <div className="product-grid">
        {filtered.map((p) => (
          <div className="card" key={p.id}>
            <div className="image-wrapper">
              <img src={p.images[0]} className="card-img-top" alt={p.name} />

              {!p.inStock && <span className="sold-badge">Sold Out</span>}
            </div>

            <div className="card-body">
              <p className="product-name">{p.name}</p>
              <p className="product-price">₹{p.price}</p>

              {p.inStock ? (
                <span className="stock-badge in">🟢 In Stock</span>
              ) : (
                <span className="stock-badge out">❌ Out of Stock</span>
              )}

              <button className="btn-view" onClick={() => openModal(p)}>
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
