import React from "react";

export default function Home() {
  
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(90deg, #2ecc71, #27ae60)",
          padding: "15px 40px",
          color: "white",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <h2 style={{ margin: 0 }}>Jurusan APT</h2>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "20px",
          }}
        >
          {[
            "Home",
            "Tentang",
            "Jurusan",
            "Galeri",
            "Berita Terbaru",
            "Kontak",
          ].map((item) => (
            <li key={item} style={{ cursor: "pointer", fontWeight: 500 }}>
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("lhan5.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Jurusan APT — Aplikasi & Pengembangan Teknologi
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          Mempersiapkan lulusan yang kompeten dalam pengembangan aplikasi,
          manajemen sistem, dan solusi praktis untuk industri.
        </p>
        <button
          style={{
            padding: "14px 30px",
            background: "#f39c12",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
            color: "white",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e67e22")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f39c12")}
        >
          Pelajari Jurusan
        </button>
      </section>

      {/* Penjelasan Jurusan */}
      <section style={{ padding: "50px 40px", backgroundColor: "#ffffff" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#27ae60",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Penjelasan Jurusan APT
        </h2>
        <div style={{ maxWidth: 600, margin: "0 auto", fontSize: "18px", lineHeight: 1.6 }}>
          <p>
            <strong>Program Studi:</strong> Pengembangan Perangkat Lunak
          </p>
          <p>
            <strong>Kompetensi:</strong> Sistem & Jaringan
          </p>
          <p>
            <strong>Kegiatan:</strong> Praktikum & Magang Industri
          </p>
        </div>
      </section>

      {/* Berita Terbaru */}
      <section style={{ padding: "50px 40px", background: "#f8f9fa" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#2c3e50",
            marginBottom: "30px",
            fontWeight: "bold",
          }}
        >
          Berita Terbaru
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Juara 1 Lomba Coding Nasional",
              desc: "Siswa APT berhasil meraih juara 1 tingkat nasional.",
              img: "juara1.jpg",
            },
            {
              title: "Hackathon 2025",
              desc: "Tim APT menjadi finalis hackathon bergengsi di Jakarta.",
              img: "juara2.jpg",
            },
            {
              title: "Lomba Robotik",
              desc: "Prestasi membanggakan di ajang lomba robotik tingkat provinsi.",
              img: "juara3.jpg",
            },
          ].map((berita, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={berita.img}
                alt={`Berita: ${berita.title}`}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "20px" }}>
                <h3 style={{ color: "#27ae60" }}>{berita.title}</h3>
                <p>{berita.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galeri Kegiatan */}
      <section style={{ padding: "60px 40px", backgroundColor: "#ffffff" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#2c3e50",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Galeri Kegiatan
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
          }}
        >
          {["lhan4.jpg", "lhan3.jpg", "lhan2.jpg", "lhan1.jpg"].map((src, index) => (
            <div
              key={index}
              style={{
                overflow: "hidden",
                borderRadius: "14px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={src}
                alt={`Galeri kegiatan ${index + 1}`}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Kontak */}
      <section style={{ padding: "50px 40px", backgroundColor: "#f8f9fa" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#2c3e50",
            fontWeight: "bold",
          }}
        >
          Kontak Jurusan
        </h2>
        <div style={{ maxWidth: 600, margin: "0 auto", fontSize: "18px", lineHeight: 1.6 }}>
          <p>
            <strong>Telepon:</strong> 055-331-7071
          </p>
          <p>
            <strong>Email:</strong> apt@sekolah.ac.id
          </p>
          <p>
            <strong>Jam:</strong> Senin - Jumat, 08.00 - 15.00
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          background: "#2ecc71",
          color: "white",
          marginTop: "20px",
        }}
      >
        © 2025 Jurusan APT. Semua Hak Cipta.
      </footer>
    </div>
  );
}
// import React from "react";