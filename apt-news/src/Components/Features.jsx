import React from "react";

export default function Features() {
  const container = {
    maxWidth: 900,
    margin: "0 auto",
    padding: "20px",
  };
  const card = {
    background: "white",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
  };
  const heading = { color: "#1f7a3a", marginBottom: 14 };

  return (
    <section style={{ padding: "24px 16px", background: "#f6faf5" }}>
      <div style={container}>
        <div style={card}>
          <h3 style={heading}>Fitur Minimal Back-End</h3>

          <ol style={{ paddingLeft: 18, lineHeight: 1.8 }}>
            <li>
              <strong>Authentication (Login & Register)</strong>
              <ul>
                <li>Admin & reporter harus punya akun.</li>
                <li>Gunakan role (admin, reporter).</li>
              </ul>
            </li>

            <li>
              <strong>Manajemen User (khusus Admin)</strong>
              <ul>
                <li>Admin bisa tambah, edit, hapus reporter.</li>
              </ul>
            </li>

            <li>
              <strong>Manajemen Berita (Admin & Reporter)</strong>
              <ul>
                <li>Tambah berita (judul, isi, gambar, kategori, tanggal, penulis).</li>
                <li>Edit berita.</li>
                <li>Hapus berita.</li>
                <li>Publikasi (draft / published).</li>
              </ul>
            </li>

            <li>
              <strong>API untuk Front-End</strong>
              <ul>
                <li>GET <code>/api/news</code> → daftar berita.</li>
                <li>GET <code>/api/news/{'{id}'}</code> → detail berita.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}