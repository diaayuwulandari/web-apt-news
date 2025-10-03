// src/components/Login.jsx
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const container = { maxWidth: 420, margin: "0 auto", padding: 20 };
  const card = { background: "white", padding: 18, borderRadius: 10, boxShadow: "0 6px 18px rgba(0,0,0,0.06)" };
  const input = { width: "100%", padding: "10px 12px", marginBottom: 12, borderRadius: 6, border: "1px solid #ddd" };
  const btn = { width: "100%", padding: "10px 12px", background: "#2e7d32", color: "white", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: "bold" };

  function handleLogin(e) {
    e.preventDefault();
    // contoh: cek sederhana
    if (!email || !password) {
      alert("Isi email dan password.");
      return;
    }
    // di sini biasanya panggil API, misal:
    // fetch('/api/login', { method: 'POST', body: JSON.stringify({email,password}) })
    console.log("Login submit", { email, password });
    alert("Simulasi login: cek console (login data).");
  }

  return (
    <section style={container}>
      <div style={card}>
        <h3 style={{ marginTop: 0 }}>Login</h3>
        <form onSubmit={handleLogin}>
          <input
            style={input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            style={input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" style={btn}>Login</button>
        </form>
      </div>
    </section>
  );
}