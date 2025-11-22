import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <h5
              style={{ color: "#1a1a1a", fontWeight: 700, fontSize: "1.1rem" }}
            >
              IZAH
            </h5>
            <p className="text-muted" style={{ fontSize: "0.85rem" }}>
              Affordable fashion jewellery for the college look. Weekly drops,
              limited stocks.
            </p>
          </div>
          <div className="col-6 mb-3">
            <h6
              style={{
                color: "#1a1a1a",
                fontWeight: 600,
                marginBottom: ".75rem",
                fontSize: "0.95rem",
              }}
            >
              Contact
            </h6>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span className="text-muted">+91 8606577577</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span className="text-muted">hello@izah.in</span>
            </div>
          </div>
          <div className="col-6 mb-3">
            <h6
              style={{
                color: "#1a1a1a",
                fontWeight: 600,
                marginBottom: ".75rem",
                fontSize: "0.95rem",
              }}
            >
              Follow
            </h6>
            <div>
              <a
                href="https://wa.me/918606577577"
                target="_blank"
                className="social-icon"
                title="WhatsApp"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://instagram.com/izah"
                target="_blank"
                className="social-icon"
                title="Instagram"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          className="text-center mt-3 pt-3 text-muted"
          style={{ borderTop: "1px solid #ffc0cb", fontSize: ".8rem" }}
        >
          © 2024 IZAH — All rights reserved
        </div>
      </div>
    </footer>
  );
}
