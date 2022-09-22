import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactsPage from './pages/ContactsPage';

const ClientsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
};

export default ClientsRoutes;
