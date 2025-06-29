import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onBlur }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm) {
      navigate(`/produtos?filter=${encodeURIComponent(trimmedTerm)}`);
      setExpanded(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const searchContainerStyle = {
    transition: "all 0.3s ease",
  };

  const mobileSearchStyle = {
    position: "absolute",
    top: "60px",
    left: "20px",
    right: "20px",
    zIndex: 50,
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      <div style={{ display: "none" }} className="desktop-search">
        <IconField
          iconPosition="right"
          style={{ width: "559px", height: "60px" }}
        >
          <InputText
            placeholder="Buscar produto..."
            style={{ width: "100%", height: "100%", padding: "0 16px" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <InputIcon
            className="pi pi-search cursor-pointer"
            onClick={handleSearch}
          />
        </IconField>
      </div>

      <div className="mobile-search">
        {expanded ? (
          <div style={{ ...searchContainerStyle, ...mobileSearchStyle }}>
            <IconField
              iconPosition="right"
              style={{ width: "100%", height: "50px" }}
            >
              <InputText
                placeholder="Buscar..."
                style={{ width: "100%", height: "100%", padding: "0 16px" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={onKeyDown}
                autoFocus
                onBlur={onBlur}
              />
              <InputIcon
                className="pi pi-search cursor-pointer"
                onClick={handleSearch}
              />
            </IconField>
          </div>
        ) : (
          <button
            style={{
              background: "none",
              border: "none",
              color: "#666666",
              fontSize: "24px",
            }}
            onClick={() => setExpanded(true)}
          >
            <FiSearch style={{ fontSize: "1.5rem" }} />
          </button>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .desktop-search {
            display: none !important;
          }
        }
        @media (min-width: 768px) {
          .mobile-search {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default SearchBar;
