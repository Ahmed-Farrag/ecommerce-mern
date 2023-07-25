import Footer from "./Components/Utility/Footer";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
