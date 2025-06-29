import { FiUser } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

const AuthRedirect = () => {
  const isSmallMobile = useMediaQuery({ maxWidth: 400 });

  const colors = {
    primary: "#C92071",
    primaryText: "#FFFFFF",
    darkGray2: "#474747",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: isSmallMobile ? "column" : "row",
    alignItems: "center",
    gap: isSmallMobile ? "6px" : "12px",
  };

  const linkStyle = {
    color: colors.darkGray2,
    textDecoration: "underline",
    textUnderlineOffset: "2px",
    fontSize: isSmallMobile ? "12px" : "14px",
    whiteSpace: "nowrap",
  };

  const buttonStyle = {
    backgroundColor: colors.primary,
    color: colors.primaryText,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "4px",
    cursor: "pointer",
    flexShrink: 0,
  };

  return (
    <div style={containerStyle}>
      {!isSmallMobile && (
        <a href="/cadastro" style={linkStyle}>
          Cadastre-se
        </a>
      )}

      <a href="/login" style={buttonStyle}>
        <FiUser size={20} />
      </a>

      {isSmallMobile && (
        <a href="/cadastro" style={linkStyle}>
          Cadastre-se
        </a>
      )}
    </div>
  );
};

export default AuthRedirect;
