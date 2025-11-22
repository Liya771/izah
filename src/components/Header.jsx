import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Header({ openCart }) {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar-custom">
        {/* HAMBURGER */}
        <button className="menu-btn" onClick={() => setMenuOpen(true)}>
          <i className="fas fa-bars"></i>
        </button>

        {/* LOGO */}
        <div className="logo">IZAH</div>

        {/* CART ICON */}
        <div className="cart-icon" onClick={openCart}>
          <i className="fas fa-shopping-bag"></i>
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </div>
      </nav>

      {/* BANNER BELOW NAV */}
      <div className="discount-banner">🎁 10% OFF ₹299+ | 20% OFF ₹399+</div>

      {/* SIDE MENU */}
      {menuOpen && (
        <div className="sidebar-overlay" onClick={() => setMenuOpen(false)}>
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>
            <button className="close-menu" onClick={() => setMenuOpen(false)}>
              ✖
            </button>

            <ul>
              <li onClick={() => scrollToSection("combos")}>🔥 Deals</li>
              <li onClick={() => scrollToSection("necklaces")}>Necklaces</li>
              <li onClick={() => scrollToSection("earrings")}>Earrings</li>
              <li onClick={() => scrollToSection("bracelets")}>Bracelets</li>
              <li onClick={() => scrollToSection("rings")}>Rings</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
