import React from "react";
import "./ProductModal.css";
import { useCart } from "../context/CartContext";

export default function ProductModal({ product, close }) {
  const { addToCart } = useCart();
  const [imgIndex, setImgIndex] = React.useState(0);
  const [qty, setQty] = React.useState(1);

  if (!product) return null;

  const nextImage = () => {
    setImgIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setImgIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        {/* CLOSE BUTTON */}
        <button className="modal-close-btn" onClick={close}>
          ×
        </button>

        {/* IMAGE CAROUSEL */}
        <div className="modal-image-wrapper">
          <img
            src={product.images[imgIndex]}
            alt={product.name}
            className="modal-image"
          />

          {product.images.length > 1 && (
            <>
              <button className="nav-btn left" onClick={prevImage}>
                ❮
              </button>
              <button className="nav-btn right" onClick={nextImage}>
                ❯
              </button>
            </>
          )}
        </div>

        {/* CONTENT */}
        <div className="modal-content">
          <h3 className="modal-title">{product.name}</h3>
          <p className="modal-price">₹{product.price}</p>
          <p className="modal-description">{product.description}</p>

          {/* QUANTITY */}
          <div className="qty-control">
            <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          {/* ADD TO CART */}
          <button
            className="modal-cart-btn"
            onClick={() => {
              addToCart(product, qty);
              closeModal();
            }}
          >
            🛍️ Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
