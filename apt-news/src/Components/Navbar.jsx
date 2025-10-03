import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #2e7d32, #388e3c)",
        padding: "15px 30px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "30px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/news"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            News
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;  