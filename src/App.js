import "./App.css";
import Home from "./pages/Home.jsx";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import React from "react";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lang, setLang] = useState("es");
  const [darkMode, setDarkMode] = useState(true); 

const handleNavigate = (href, index) => {
  setActiveIndex(index);
  if (href.startsWith("#")) {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; 
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
};

  // Cambia la clase del body según el modo
  React.useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  // Traducciones simples
  const translations = {
    es: {
      Home: "Inicio",
      About: "Sobre mí",
      Projects: "Proyectos",
      Contact: "Contacto",
      Portfolio: (
        <>
          Mpascv
          <span style={{ color: "#2196f3" }}>.</span>
        </>
      ),
    },
    en: {
      Home: "Home",
      About: "About",
      Projects: "Projects",
      Contact: "Contact",
      Portfolio: (
        <>
          Mpascv
          <span style={{ color: "#2196f3" }}>.</span>
        </>
      ),
    },
  };

  return (
    <>
      <header className="main-header">
        <nav className="navbar">
          <div className="navbar-title">{translations[lang].Portfolio}</div>
          <ul className="nav-list">
            {items.map((item, idx) => (
              <li
                key={item.label}
                className={activeIndex === idx ? "active" : ""}
                onClick={() => handleNavigate(item.href, idx)}
                style={{ cursor: "pointer" }}
              >
                {translations[lang][item.label]}
              </li>
            ))}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginLeft: "1rem",
              }}
            >
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="lang-select"
                aria-label="Select language"
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: darkMode ? "#00bfff" : "#222",
                  fontSize: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  width: "2.5rem",
                }}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FaMoon /> : <FaSun />}
              </button>
            </div>
          </ul>
        </nav>
      </header>
      <Home lang={lang} darkMode={darkMode} />
    </>
  );
}

export default App;
