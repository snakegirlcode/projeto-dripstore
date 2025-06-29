const ProductCard = ({ imagem, name, price, priceDiscount }) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[292px]">
      <img
        src={imagem}
        alt={name}
        className="object-cover rounded w-full h-[321px]"
      />

      <h3 className="font-semibold text-[20px] leading-[28px] text-[#4A4A4A]">
        {name}
      </h3>

      <div className="flex items-center gap-3">
        {priceDiscount ? (
          <>
            <span className="text-[24px] text-[#A0A0A0] line-through">
              {price}
            </span>
            <span className="text-[24px] text-[#4A4A4A]">{priceDiscount}</span>
          </>
        ) : (
          <span className="text-[24px] text-[#4A4A4A]">{price}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
