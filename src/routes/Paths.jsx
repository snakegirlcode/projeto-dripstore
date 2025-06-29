import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../pages/PageLayout";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/produto/:id" element={<ProductViewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
