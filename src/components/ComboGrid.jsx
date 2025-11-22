import React from "react";
import { combos } from "../data";
import { useCart } from "../context/CartContext";

export default function ComboGrid() {
  const { addCombo } = useCart();

  return (
    <section id="combos" className="category-section">
      <h5 className="section-title">🔥 Combo Deals</h5>

      <div className="combo-grid">
        {combos.map((combo) => (
          <div className="combo-card" key={combo.id}>
            <span className="combo-badge">{combo.badge}</span>

            <img src={combo.image} className="combo-img" alt={combo.name} />

            <div className="combo-body">
              <div className="combo-name">{combo.name}</div>
              <div className="combo-desc">{combo.description}</div>

              <div className="combo-pricing">
                <span className="old">₹{combo.originalPrice}</span>
                <span className="new">₹{combo.salePrice}</span>
                <span className="discount">{combo.discount}</span>
              </div>

              <button
                className="btn btn-accent w-100"
                onClick={() => addCombo(combo)}
              >
                <i className="fas fa-shopping-bag"></i> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
