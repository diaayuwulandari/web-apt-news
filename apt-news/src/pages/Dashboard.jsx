import React from "react";
import UsersAdmin from "../components/UsersAdmin";
import NewsList from "../components/NewsList";

export default function Dashboard() {
  return (
    <div className="grid">
      <section><NewsList /></section>
      <aside><UsersAdmin /></aside>
    </div>
  );
}