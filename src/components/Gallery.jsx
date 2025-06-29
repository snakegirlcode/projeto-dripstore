import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Gallery = ({
  images = [],
  width = "100%",
  height = "auto",
  radius = "8px",
  showThumbs = true,
  className = "",
  autoPlay = false,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = images.length;

  useEffect(() => {
    if (!autoPlay || isHovered || total <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, isHovered, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const containerStyle = {
    width,
    maxWidth: "100%",
    position: "relative",
    borderRadius: radius,
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height,
    aspectRatio: "1/1",
    objectFit: "cover",
    borderRadius: radius,
    transition: "opacity 0.5s ease",
  };

  const navButtonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "#C92071",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10,
    opacity: 0.8,
    transition: "opacity 0.3s ease",
  };

  const thumbnailStyle = {
    width: "80px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "4px",
    cursor: "pointer",
    opacity: 0.7,
    transition: "all 0.3s ease",
  };

  return (
    <div
      className={`gallery-container ${className}`}
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: "relative" }}>
        {images.length > 0 && (
          <img
            src={images[currentIndex].src}
            alt={`Imagem ${currentIndex + 1}`}
            style={imageStyle}
            loading="eager"
          />
        )}

        {total > 1 && (
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              right: "16px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "white",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "14px",
            }}
          >
            {`${currentIndex + 1}/${total}`}
          </div>
        )}

        {total > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Imagem anterior"
              style={{ ...navButtonStyle, left: "16px" }}
              className="gallery-nav-button"
            >
              <FiChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              aria-label="Próxima imagem"
              style={{ ...navButtonStyle, right: "16px" }}
              className="gallery-nav-button"
            >
              <FiChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {showThumbs && images.length > 1 && (
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "12px",
            overflowX: "auto",
            padding: "8px 0",
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`Miniatura ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              style={{
                ...thumbnailStyle,
                border: `2px solid ${
                  index === currentIndex ? "#C92071" : "transparent"
                }`,
                opacity: index === currentIndex ? 1 : 0.7,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.opacity =
                  index === currentIndex ? "1" : "0.7")
              }
            />
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .gallery-container {
            width: 100% !important;
          }

          .gallery-nav-button {
            width: 32px !important;
            height: 32px !important;
          }
        }

        @media (max-width: 480px) {
          [style*="width: 80px"] {
            width: 60px !important;
            height: 45px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
