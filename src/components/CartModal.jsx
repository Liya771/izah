import React from "react";
import { useCart } from "../context/CartContext.jsx";
import { calculateDiscount, fmtINR } from "../utils.js";
import { sellerNumber } from "../data.js";

export default function CartModal() {
  const { cart, remove, clear } = useCart();

  const subtotal = cart.reduce((s, item) => s + item.price * item.qty, 0);
  const discount = calculateDiscount(subtotal);
  const total = subtotal - discount.amount;

  function waLink() {
    let message = `Hello! I'd like to order from IZAH:%0A%0A`;
    cart.forEach((item) => {
      message += `*${item.name}*%0AQty: ${item.qty} × ₹${item.price} = ₹${
        item.price * item.qty
      }%0A%0A`;
    });
    message += `Subtotal: ₹${subtotal}%0A`;
    if (discount.amount > 0)
      message += `Discount (${discount.rate * 100}%): -₹${discount.amount}%0A`;
    message += `*Total: ₹${total}*%0A%0APlease confirm availability and payment options (COD/Prepaid).`;
    return `https://wa.me/${sellerNumber}?text=${message}`;
  }

  return (
    <div className="modal fade" id="cartModal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
        <div
          className="modal-content"
          style={{
            background: "#fff",
            color: "#1a1a1a",
            border: "2px solid #ffc0cb",
          }}
        >
          <div
            className="modal-header"
            style={{ borderBottom: "1px solid #ffc0cb" }}
          >
            <h5 className="modal-title">
              <i className="fas fa-shopping-bag me-2"></i>Your Cart
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <div id="cart-items">
              {cart.length === 0 ? (
                <div className="text-center py-5">
                  <i className="fas fa-shopping-bag fa-3x text-muted mb-3"></i>
                  <p className="text-muted">Your cart is empty.</p>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div className="cart-item" key={idx}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-img"
                    />
                    <div className="cart-item-details">
                      <div className="cart-item-name">{item.name}</div>
                      <div className="cart-item-info">
                        Qty: {item.qty} × {fmtINR(item.price)}
                      </div>
                    </div>
                    <div className="cart-item-actions">
                      <div className="cart-item-price">
                        {fmtINR(item.price * item.qty)}
                      </div>
                      <button
                        className="btn btn-sm btn-link text-danger remove-item p-0"
                        onClick={() => remove(idx)}
                      >
                        <i className="fas fa-trash"></i> Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div
              className="mt-3 p-3"
              style={{ background: "rgba(255,182,193,0.1)", borderRadius: 10 }}
            >
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                  Subtotal:
                </span>
                <span
                  id="cart-subtotal"
                  style={{ fontSize: "1rem", fontWeight: 700 }}
                >
                  {fmtINR(subtotal)}
                </span>
              </div>

              {discount.amount > 0 && (
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span
                    style={{
                      fontWeight: 600,
                      color: "#38ef7d",
                      fontSize: "0.9rem",
                    }}
                  >
                    Discount:
                  </span>
                  <span
                    id="cart-discount"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#38ef7d",
                    }}
                  >
                    -{fmtINR(discount.amount)}
                  </span>
                </div>
              )}

              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                  Total:
                </span>
                <span
                  id="cart-total"
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                  }}
                >
                  {fmtINR(total)}
                </span>
              </div>
              <small
                className="text-muted d-block mt-2"
                style={{ fontSize: "0.75rem" }}
              >
                <i className="fas fa-info-circle"></i> Shipping via WhatsApp
                (COD/Prepaid)
              </small>
            </div>
          </div>
          <div
            className="modal-footer"
            style={{ borderTop: "1px solid #ffc0cb", gap: 8 }}
          >
            <button
              id="clear-cart"
              className="btn btn-outline-dark btn-sm"
              onClick={() => {
                if (window.confirm("Clear all items from cart?")) clear();
              }}
            >
              <i className="fas fa-trash"></i> Clear
            </button>
            <a
              id="checkout-whatsapp"
              className="btn btn-accent flex-grow-1"
              target="_blank"
              rel="noreferrer"
              href={waLink()}
            >
              <i className="fab fa-whatsapp"></i> Checkout on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
