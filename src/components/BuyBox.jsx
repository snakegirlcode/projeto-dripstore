import starIcon from "../assets/star-icon.svg";

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  // Cores mantidas em style conforme solicitado
  const colors = {
    darkGray: "#1F1F1F",
    darkGray2: "#666666",
    darkGray3: "#474747",
    lightGray2: "#CCCCCC",
    lightGray: "#8F8F8F",
    warning: "#F6AA1C",
    white: "#FFFFFF",
  };

  return (
    <div className="bg-white rounded-lg p-6 max-w-full flex-1 shadow-sm">
      <h1
        className="text-3xl font-normal mb-1"
        style={{ color: colors.darkGray }}
      >
        {name}
      </h1>

      <p className="text-xs mb-3" style={{ color: colors.darkGray3 }}>
        Ref: {reference}
      </p>

      <div className="flex items-center gap-2 my-2">
        <div
          className="rounded px-2 py-1 flex items-center gap-1 text-sm"
          style={{
            backgroundColor: colors.warning,
            color: colors.white,
          }}
        >
          {stars}
          <img src={starIcon} alt="Estrela" className="w-4 h-4" />
        </div>
        <span className="text-sm" style={{ color: colors.lightGray }}>
          ({rating} avaliações)
        </span>
      </div>

      <div className="flex items-center gap-2">
        {priceDiscount ? (
          <>
            <span
              className="text-base"
              style={{
                color: colors.lightGray2,
                textDecoration: "line-through",
              }}
            >
              R$ {price.toFixed(2)}
            </span>
            <span
              className="text-3xl font-normal"
              style={{ color: colors.darkGray2 }}
            >
              R$ {priceDiscount.toFixed(2)}
            </span>
          </>
        ) : (
          <span
            className="text-3xl font-normal"
            style={{ color: colors.darkGray2 }}
          >
            R$ {price.toFixed(2)}
          </span>
        )}
      </div>

      <p className="text-sm mt-4" style={{ color: colors.darkGray2 }}>
        {description}
      </p>

      <div className="mt-6">{children}</div>

      <button
        className="mt-6 py-3 w-full text-base rounded border-none cursor-pointer font-bold"
        style={{
          backgroundColor: colors.warning,
          color: colors.white,
        }}
      >
        COMPRAR
      </button>
    </div>
  );
};

export default BuyBox;
