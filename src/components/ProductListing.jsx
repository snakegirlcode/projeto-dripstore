import ProductCard from "./ProductCard";

const ProductListing = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          imagem={product.image}
          name={product.name}
          price={`R$ ${product.price.toFixed(2).replace(".", ",")}`}
          priceDiscount={
            product.priceDiscount
              ? `R$ ${product.priceDiscount.toFixed(2).replace(".", ",")}`
              : null
          }
        />
      ))}
    </div>
  );
};

export default ProductListing;
