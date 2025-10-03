import React from "react";

const Berita = () => {
  const berita = [
    {
      id: 1,
      title: "Padi Organik Mulai Diminati Pasar Ekspor",
      date: "2 Oktober 2025",
      img: "https://source.unsplash.com/400x200/?organic,rice",
      desc: "Produk padi organik dari petani Indonesia mulai menembus pasar internasional, terutama ke Jepang dan Singapura."
    },
    {
      id: 2,
      title: "Teknologi Irigasi Hemat Air untuk Petani",
      date: "1 Oktober 2025",
      img: "https://source.unsplash.com/400x200/?irrigation,farming",
      desc: "Sistem irigasi modern berbasis sensor mampu menghemat air hingga 40% dan meningkatkan hasil panen."
    },
    {
      id: 3,
      title: "Harga Sayuran Stabil Menjelang Akhir Tahun",
      date: "29 September 2025",
      img: "https://source.unsplash.com/400x200/?vegetables,market",
      desc: "Meski cuaca tidak menentu, harga sayuran di pasar tradisional tetap stabil berkat pasokan lokal yang melimpah."
    },
    {
      id: 4,
      title: "Generasi Muda Bangun Startup Pertanian Digital",
      date: "28 September 2025",
      img: "https://source.unsplash.com/400x200/?startup,agriculture",
      desc: "Anak muda Indonesia menghadirkan solusi digital seperti aplikasi jual beli hasil tani dan sistem monitoring lahan."
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Berita Pertanian Terkini</h1>
      <div style={styles.grid}>
        {berita.map(item => (
          <div key={item.id} style={styles.card}>
            <img src={item.img} alt={item.title} style={styles.image} />
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <small style={styles.date}>{item.date}</small>
            <p style={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "20px", textAlign: "center" },
  title: { color: "green", marginBottom: "20px" },
  grid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
    gap: "20px" 
  },
  card: { 
    background: "#eaf7ea", 
    padding: "15px", 
    borderRadius: "10px", 
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)", 
    border: "1px solid #cde6cd" 
  },
  cardTitle: { color: "darkgreen", fontSize: "18px" },
  date: { color: "#555", fontSize: "14px" },
  desc: { color: "#333", fontSize: "15px" },
  image: { width: "100%", borderRadius: "10px", marginBottom: "10px" }
};

export default Berita;