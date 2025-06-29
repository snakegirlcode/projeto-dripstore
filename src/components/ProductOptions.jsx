import { useState } from "react";

const ProductOptions = ({ options, shape, type, radius }) => {
  const [selected, setSelected] = useState(null);

  const primary = "#C92071";
  const lightGray2 = "#CCCCCC";
  const darkGray2 = "#666666";

  const getStyles = (option) => {
    const isSelected = selected === option;
    const baseStyle = {
      border: isSelected ? `2px solid ${primary}` : `1px solid ${lightGray2}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    };

    if (shape === "square") {
      return {
        ...baseStyle,
        width: "auto",
        height: "46px",
        borderRadius: radius,
        padding: "0 12px",
        backgroundColor: type === "color" ? option : "#fff",
        color: type === "text" ? darkGray2 : "transparent",
        fontSize: type === "text" ? "24px" : "0px",
      };
    }

    if (shape === "circle") {
      return {
        ...baseStyle,
        width: "31px",
        height: "31px",
        borderRadius: "50%",
        backgroundColor: type === "color" ? option : "#fff",
        color: type === "text" ? darkGray2 : "transparent",
        fontSize: type === "text" ? "24px" : "0px",
      };
    }

    return {};
  };

  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {options.map((option, index) => (
        <div
          key={index}
          style={getStyles(option)}
          onClick={() => setSelected(option)}
        >
          {type === "text" ? option : ""}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;
