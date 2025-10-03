// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';

// Halaman yang tidak ingin menampilkan Navbar
const hideOnPages = ["/login", "/dashboard", "/reporterdashboard", "/loginreporter"];

function Layout() {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  const hideNav = hideOnPages.includes(currentPath);

  return (
    <>
      {!hideNav && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
