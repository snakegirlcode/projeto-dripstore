import logo from "../assets/logo-header.svg";
import logoWhite from "../assets/logo-footer.svg";

const Logo = ({ white = false }) => {
  return (
    <img
      src={white ? logoWhite : logo}
      alt="Logo Header"
      style={{ width: "253px", height: "44px" }}
    />
  );
};

export default Logo;
