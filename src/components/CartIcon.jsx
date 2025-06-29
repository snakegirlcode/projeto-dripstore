import cart from "../assets/mini-cart.svg";
import { useMediaQuery } from "react-responsive";

const CartIcon = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <button
      aria-label="Carrinho de compras"
      className={`relative ${isMobile ? "ml-2" : "ml-4"}`}
    >
      <img
        src={cart}
        alt=""
        width={isMobile ? 20 : 24}
        height={isMobile ? 20 : 24}
        className="transition-transform hover:scale-110"
      />
      
      <span
        className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
        style={{ backgroundColor: "#C92071" }}
      >
        0
      </span>
    </button>
  );
};

export default CartIcon;
