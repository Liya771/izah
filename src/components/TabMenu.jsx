import React, { useEffect, useState } from "react";

export default function TabMenu() {
  const sections = ["combos", "necklaces", "earrings", "bracelets", "rings"];
  const [active, setActive] = useState("combos");

  // Detect scroll section
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 150;

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;

        if (
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = target.offsetTop - 140;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <nav className="tab-menu">
      <ul className="nav nav-pills mb-0">
        <li className="nav-item" key="combos">
          <button
            className={`nav-link ${active === "combos" ? "active" : ""}`}
            onClick={() => scrollToSection("combos")}
          >
            <i className="fas fa-fire"></i> Deals
          </button>
        </li>

        {sections.slice(1).map((sec) => (
          <li className="nav-item" key={sec}>
            <button
              className={`nav-link ${active === sec ? "active" : ""}`}
              onClick={() => scrollToSection(sec)}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
