import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import AuthRedirect from "./AuthRedirect";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import MainNav from "./MainNav";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);

  return (
    <header
      style={{
        width: "100%",
        padding: "1rem",
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        zIndex: 50,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <button
          style={{
            display: "none",
            color: "#374151",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
          }}
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Logo */}
        <div style={{ flexShrink: 0 }}>
          <Logo />
        </div>

        {searchExpanded ? (
          <div style={{ flexGrow: 1, margin: "0 0.5rem" }}>
            <SearchBar onBlur={() => setSearchExpanded(false)} />
          </div>
        ) : (
          <div
            style={{ display: "none", flexGrow: 1, margin: "0 1rem" }}
            className="desktop-search"
          >
            <SearchBar />
          </div>
        )}

        <button
          style={{
            display: "none",
            color: "#374151",
            background: "none",
            border: "none",
            fontSize: "1.25rem",
          }}
          className="mobile-search-button"
          onClick={() => setSearchExpanded(!searchExpanded)}
        >
          <FiSearch style={{ fontSize: "1.25rem" }} />
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ display: "none" }} className="desktop-auth">
            <AuthRedirect />
          </div>
          <CartIcon />
        </div>
      </div>

      <div
        style={{
          marginTop: "1rem",
          borderTop: "1px solid #e5e7eb",
          paddingTop: "0.5rem",
          display: mobileMenuOpen ? "block" : "none",
        }}
        className="main-nav-container"
      >
        <MainNav />
      </div>

      {mobileMenuOpen && (
        <div
          style={{
            display: "block",
            padding: "0.5rem 1rem",
          }}
          className="mobile-auth"
        >
          <AuthRedirect />
        </div>
      )}

      <style jsx>{`
        @media (max-width: 767px) {
          .mobile-menu-button,
          .mobile-search-button {
            display: block !important;
          }

          .desktop-search,
          .desktop-auth {
            display: none !important;
          }
        }

        @media (min-width: 768px) {
          .mobile-menu-button,
          .mobile-search-button,
          .mobile-auth {
            display: none !important;
          }

          .desktop-search,
          .desktop-auth,
          .main-nav-container {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
