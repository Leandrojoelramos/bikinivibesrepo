import { Routes, Route, Navigate } from "react-router-dom";
import Principal from "../pages/Principal/principal.jsx";
import ContaUs from "../pages/contact-us/contact-us.jsx";
import Catalog from "../pages/catalog/catalog.jsx";
import ProductView from "../pages/productView/ProductView.jsx";
import Instructions from "../pages/instructions/Instructions.jsx";
import Layout from "../components/layout/layout.jsx";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/Pagina-Principal" replace />} />
        <Route path="/Pagina-Principal" element={<Principal />} />
        <Route path="/Contactanos" element={<ContaUs />} />
        <Route path="/Catalogo" element={<Catalog />} />
        <Route path="/Producto/:id" element={<ProductView />} />
        <Route path="/Instrucciones" element={<Instructions />} />
      </Route>
    </Routes>
  );
};

export default Router;
