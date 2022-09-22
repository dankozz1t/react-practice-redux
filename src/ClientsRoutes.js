import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

const ClientsRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/basket" element={<CartPage />} />
    </Routes>
  );
};

export default ClientsRoutes;
