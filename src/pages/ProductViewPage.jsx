import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

const ProductViewPage = () => {
  const product = {
    name: "Tênis Esportivo",
    reference: "REF123456",
    stars: 4.5,
    rating: 132,
    price: 300,
    priceDiscount: 249.9,
    description: "Tênis esportivo de alta performance, ideal para corridas.",
    images: [
      { src: "/produc-image-1.jpeg" },
      { src: "/produc-image-2.jpeg" },
      { src: "/produc-image-3.jpeg" },
      { src: "/produc-image-4.jpeg" },
      { src: "/produc-image-5.jpeg" },
    ],
    sizes: ["37", "38", "39", "40"],
    colors: ["#000", "#fff", "#c92071"],
  };

  const recommendedProducts = [
    {
      name: "Produto recomendado 1",
      image: "/product-thumb-1.jpeg",
      price: 199,
      priceDiscount: 149,
    },
    {
      name: "Produto recomendado 2",
      image: "/product-thumb-2.jpeg",
      price: 99,
    },
  ];

  return (
    <div className="p-6 flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <Gallery
          images={product.images}
          showThumbs
          width="700px"
          height="570px"
          radius="4px"
        />
        <BuyBox
          name={product.name}
          reference={product.reference}
          stars={product.stars}
          rating={product.rating}
          price={product.price}
          priceDiscount={product.priceDiscount}
          description={product.description}
        >
          <ProductOptions
            options={product.sizes}
            shape="square"
            radius="8px"
            type="text"
          />
          <ProductOptions
            options={product.colors}
            shape="circle"
            type="color"
          />
        </BuyBox>
      </div>

      <Section
        title="Produtos recomendados"
        titleAlign="left"
        link={{ text: "Ver todos", href: "/produtos" }}
      >
        <ProductListing products={recommendedProducts} />
      </Section>
    </div>
  );
};

export default ProductViewPage;
