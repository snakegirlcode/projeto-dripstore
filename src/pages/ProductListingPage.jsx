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
    price: 49.9,
  },
  {
    name: "Produto 3",
    image: "/product-thumb-3.jpeg",
    price: 299,
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

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";
import { Dropdown } from "primereact/dropdown";

const ProductListingPage = () => {
  const [sortOrder, setSortOrder] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  const sortOptions = [
    { label: "Menor preço", value: "low" },
    { label: "Maior preço", value: "high" },
  ];

  const filters = {
    categoria: [
      { text: "Camisetas" },
      { text: "Calças" },
      { text: "Bonés" },
      { text: "Tênis" },
    ],
    cores: [
      { text: "Preto" },
      { text: "Branco" },
      { text: "Azul" },
      { text: "Rosa" },
    ],
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filter = params.get("filter")?.toLowerCase() || "";

    let result = products;

    if (filter) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(filter)
      );
    }

    if (sortOrder) {
      result = [...result].sort((a, b) => {
        const priceA = a.priceDiscount ?? a.price;
        const priceB = b.priceDiscount ?? b.price;

        if (sortOrder === "low") return priceA - priceB;
        if (sortOrder === "high") return priceB - priceA;
        return 0;
      });
    }

    setFilteredProducts(result);
  }, [location.search, sortOrder]);

  const totalProducts = filteredProducts.length;

  return (
    <div className="flex flex-column md:flex-row gap-5 p-4">
      <aside style={{ width: "308px" }} className="flex flex-column gap-4">
        <div>
          <label
            htmlFor="sortOrder"
            className="block mb-2 text-sm font-medium text-color-secondary"
            style={{ fontSize: "16px", color: "#666" }}
          >
            Ordenar por
          </label>
          <Dropdown
            id="sortOrder"
            options={sortOptions}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.value)}
            placeholder="Selecione"
            className="w-full h-3rem"
          />
        </div>

        <div
          className="p-3"
          style={{ backgroundColor: "#fff", borderRadius: "8px" }}
        >
          <h3
            style={{ fontSize: "16px", color: "#666", marginBottom: "0.5rem" }}
          >
            Filtrar por
          </h3>
          <hr style={{ borderColor: "#E6E8EC" }} />
          <div className="mt-3">
            <FilterGroup
              title="Categorias"
              inputType="checkbox"
              options={filters.categoria}
            />
            <FilterGroup
              title="Cores"
              inputType="checkbox"
              options={filters.cores}
            />
          </div>
        </div>
      </aside>

      <main className="flex-1">
        <Section
          title={`${totalProducts} produto${
            totalProducts !== 1 ? "s" : ""
          } encontrados`}
          titleAlign="left"
        >
          <ProductListing products={filteredProducts} />
        </Section>
      </main>
    </div>
  );
};

export default ProductListingPage;
