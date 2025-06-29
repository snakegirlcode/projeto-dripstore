import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

const HomePage = () => {
  const slideImages = Array.from({ length: 8 }, (_, i) => ({
    src: `/home-slide-${i + 1}.jpeg`,
  }));

  const collections = [
    "/collection-1.png",
    "/collection-2.png",
    "/collection-3.png",
  ];

  const products = [
    {
      name: "Produto 1",
      image: "/product-thumb-1.jpeg",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Produto 2",
      image: "/product-thumb-2.jpeg",
      price: 89.9,
    },
    {
      name: "Produto 3",
      image: "/product-thumb-3.jpeg",
      price: 129.9,
    },
    {
      name: "Produto 4",
      image: "/product-thumb-4.jpeg",
      price: 220,
      priceDiscount: 199.9,
    },
    {
      name: "Produto 5",
      image: "/product-thumb-5.jpeg",
      price: 75.5,
    },
  ];

  return (
    <div className="home-page max-w-[1440px] mx-auto px-4">
      <Gallery
        width={1440}
        height={681}
        radius="0px"
        showThumbs
        images={slideImages}
        className="w-full"
      />

      <Section
        title="Coleções em destaque"
        titleAlign="center"
        className="mt-20 mb-20"
      >
        <div className="flex gap-6 justify-center">
          {collections.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Coleção ${index + 1}`}
              className="w-full max-w-[440px] rounded-md object-cover"
            />
          ))}
        </div>
      </Section>

      <Section title="Produtos em alta" titleAlign="left" className="mb-20">
        <ProductListing products={products} />
      </Section>
    </div>
  );
};

export default HomePage;
