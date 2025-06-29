import { NavLink } from "react-router-dom";
import { useState } from "react";

const MainNav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/produtos", label: "Produtos" },
    { to: "/categorias", label: "Categorias" },
    { to: "/meus-pedidos", label: "Meus Pedidos" },
  ];

  const primary = "#C92071";
  const secondary = "#B5B6F2";
  const darkGray3 = "#666666";
  const white = "#FFFFFF";

  const activeStyle = {
    color: primary,
    borderBottom: `3px solid ${primary}`,
    fontWeight: "bold",
    paddingBottom: "6px",
    textDecoration: "none",
  };

  const inactiveStyle = {
    color: darkGray3,
    textDecoration: "none",
    paddingBottom: "6px",
  };

  const mobileNavStyle = {
    position: "fixed",
    top: "80px",
    left: 0,
    right: 0,
    backgroundColor: white,
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 40,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  return (
    <>
      <button
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: darkGray3,
          fontSize: "24px",
          padding: "10px",
        }}
        className="mobile-menu-button"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        {mobileNavOpen ? "✕" : "☰"}
      </button>

      <nav
        style={{
          display: "flex",
          gap: "30px",
          paddingBottom: "8px",
        }}
        className="desktop-nav"
      >
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            end
            onMouseEnter={(e) => {
              if (!e.currentTarget.classList.contains("active")) {
                e.currentTarget.style.color = secondary;
                e.currentTarget.style.cursor = "pointer";
              }
            }}
            onMouseLeave={(e) => {
              if (!e.currentTarget.classList.contains("active")) {
                e.currentTarget.style.color = darkGray3;
              }
            }}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {mobileNavOpen && (
        <nav style={mobileNavStyle} className="mobile-nav">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                ...(isActive ? activeStyle : inactiveStyle),
                fontSize: "18px",
                padding: "10px 0",
              })}
              onClick={() => setMobileNavOpen(false)}
              end
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}

      <style jsx>{`
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
        @media (min-width: 768px) {
          .mobile-menu-button,
          .mobile-nav {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default MainNav;
