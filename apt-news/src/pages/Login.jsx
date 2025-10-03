import React, { useState, useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (e) {
      setErr(e.message || "Gagal login");
    }
  }

  return (
    <form onSubmit={submit}>
      <h3>Login</h3>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      {err && <div className="error">{err}</div>}
    </form>
  );
}