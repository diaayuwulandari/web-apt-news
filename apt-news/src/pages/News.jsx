import React from "react";

function News() {
  const berita = [
    {
      id: 1,
      title: "Petani Muda Sukses dengan Hidroponik",
      desc: "Generasi muda kini mulai menekuni pertanian hidroponik dengan hasil melimpah.",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },
    {
      id: 2,
      title: "Pupuk Organik Lebih Ramah Lingkungan",
      desc: "Penggunaan pupuk organik terus meningkat untuk menjaga kesuburan tanah.",
      img: "https://images.unsplash.com/photo-1504595403659-9088ce801e29",
    },
    {
      id: 3,
      title: "Teknologi Drone untuk Pemantauan Sawah",
      desc: "Drone kini digunakan petani untuk memantau lahan dengan lebih efektif.",
      img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ color: "#2e7d32", marginBottom: "25px", textAlign: "center" }}>
        📰 Berita Pertanian Terbaru
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {berita.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ margin: "0 0 10px 0", color: "#1b5e20" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#555" }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;